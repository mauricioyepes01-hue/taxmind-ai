import { getCsrfToken, signIn } from 'next-auth/react'
import { useState } from 'react'

export default function SignIn({ csrfToken }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(e){
    e.preventDefault()
    setLoading(true)
    const res = await signIn('credentials', { redirect: false, email, password })
    setLoading(false)
    if(res.error){
      alert('Login failed: '+res.error)
    } else {
      window.location.href = '/dashboard'
    }
  }

  return (
    <main style={{fontFamily:'Inter, sans-serif', padding:40}}>
      <img src="/logo.png" alt="TaxMind" style={{width:140}}/>
      <h2>Sign in</h2>
      <form onSubmit={submit} style={{maxWidth:420, display:'flex', flexDirection:'column', gap:8}}>
        <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
        <label>Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} required />
        <label>Password</label>
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" required/>
        <button type="submit" disabled={loading} style={{padding:'10px 14px', marginTop:8}}>{loading ? 'Signing…' : 'Sign in'}</button>
      </form>
    </main>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  }
}
