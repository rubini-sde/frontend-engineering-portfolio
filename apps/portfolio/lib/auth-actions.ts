'use server'

import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/db'
import { getSession } from '@/lib/session'
import { signUpSchema, signInSchema } from '@/lib/validation'

export type AuthActionState = {
  serverError?: string
  fieldErrors?: Record<string, string[]>
} | null

export async function signUpAction(
  _prev: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const parsed = signUpSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) return { fieldErrors: parsed.error.flatten().fieldErrors }

  const email = parsed.data.email.toLowerCase()

  const existing = await prisma.user.findUnique({
    where: { email },
    select: { id: true },
  })
  if (existing) return { serverError: 'Account already exists. Sign in instead?' }

  const hash = await bcrypt.hash(parsed.data.password, 12)
  const user = await prisma.user.create({
    data: { email, password: hash },
    select: { id: true, email: true },
  })

  const session = await getSession()
  session.userId = user.id
  session.email = user.email
  session.isLoggedIn = true
  await session.save()

  redirect('/projects/sign-in/success')
}

export async function signInAction(
  _prev: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const parsed = signInSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) return { fieldErrors: parsed.error.flatten().fieldErrors }

  const email = parsed.data.email.toLowerCase()
  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true, email: true, password: true },
  })

  const dummyHash = '$2b$12$invalidhashpaddinginvalidhashpaddinginvalidhashpaddingXX'
  const passwordMatch = await bcrypt.compare(
    parsed.data.password,
    user?.password ?? dummyHash
  )
  if (!user || !passwordMatch) {
    return { serverError: 'Incorrect email or password.' }
  }

  const session = await getSession()
  session.userId = user.id
  session.email = user.email
  session.isLoggedIn = true
  await session.save()

  redirect('/projects/sign-in/success')
}

export async function signOutAction(): Promise<void> {
  const session = await getSession()
  session.destroy()
  redirect('/projects/sign-in')
}
