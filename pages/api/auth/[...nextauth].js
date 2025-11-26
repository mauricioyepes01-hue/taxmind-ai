import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const ADMIN_EMAIL = process.env.ADMIN_EMAIL
        const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
        if(!ADMIN_EMAIL || !ADMIN_PASSWORD) {
          throw new Error('Admin credentials not configured.')
        }
        if(credentials.email === ADMIN_EMAIL && credentials.password === ADMIN_PASSWORD) {
          return { id: '1', name: ADMIN_EMAIL.split('@')[0], email: ADMIN_EMAIL }
        }
        return null
      }
    })
  ],
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin'
  }
})
