import { z } from 'zod'

export const signUpSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required.')
    .email('Email address is required'),
  password: z
    .string()
    .min(1, 'Password is required.')
    .min(8, 'Password should contain 8 - 64 characters')
    .max(64, 'Password should contain 8 - 64 characters')
    .regex(/[A-Z]/, 'Password should contain one uppercase letter')
    .regex(/[a-z]/, 'Password should contain one lowercase letter')
    .regex(/[0-9]/, 'Password should contain one number')
    .regex(/[!@#$%^&*]/, 'Password should contain one special character'),
})

export const signInSchema = z.object({
  email: z.string().min(1, 'Email is required.'),
  password: z.string().min(1, 'Password is required.'),
})

export type SignUpInput = z.infer<typeof signUpSchema>
export type SignInInput = z.infer<typeof signInSchema>
