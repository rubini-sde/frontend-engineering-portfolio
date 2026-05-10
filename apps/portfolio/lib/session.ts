import { getIronSession, type SessionOptions } from 'iron-session'
import { cookies } from 'next/headers'

export type SessionData = {
  userId: string
  email: string
  isLoggedIn: boolean
}

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: 'gfe-auth-session',
  ttl: 60 * 60 * 24 * 7,
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  },
}

export async function getSession() {
  return getIronSession<SessionData>(await cookies(), sessionOptions)
}
