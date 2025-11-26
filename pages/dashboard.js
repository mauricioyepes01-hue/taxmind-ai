import { getSession, useSession } from 'next-auth/react'
export default function Dashboard(){
  const { data: session } = useSession()
  if(!session) {
    return (<main style={{padding:40}}>Access denied. Please <a href='/auth/signin'>sign in</a>.</main>)
  }
  return (
    <main style={{padding:40, fontFamily:'Inter, sans-serif'}}>
      <h2>Welcome, {session.user.email}</h2>
      <p>This is the TaxMind AI dashboard (MVP).</p>
      <section style={{marginTop:20}}>
        <h3>Sample panels</h3>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginTop:12}}>
          <div style={{padding:12, border:'1px solid #eee'}}>Income (projected): $0.00</div>
          <div style={{padding:12, border:'1px solid #eee'}}>Expenses (projected): $0.00</div>
          <div style={{padding:12, border:'1px solid #eee'}}>Estimated taxes: $0.00</div>
          <div style={{padding:12, border:'1px solid #eee'}}>Connected banks: 0</div>
        </div>
      </section>
    </main>
  )
}

export async function getServerSideProps(ctx){
  const session = await getSession(ctx)
  if(!session){
    return { redirect: { destination: '/auth/signin', permanent: false } }
  }
  return { props: {} }
}
