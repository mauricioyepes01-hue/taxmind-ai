import Link from 'next/link'
export default function Home(){
  return (
    <main style={{fontFamily: 'Inter, sans-serif', display:'flex', flexDirection:'column', alignItems:'center', padding:40}}>
      <img src="/logo.png" alt="TaxMind AI" style={{width:180}}/>
      <h1>TaxMind AI — MVP</h1>
      <p>Autonomous tax insights & simple bookkeeping — demo MVP</p>
      <div style={{marginTop:24}}>
        <Link href="/auth/signin"><button style={{padding:'10px 16px'}}>Sign in</button></Link>
        <Link href="/dashboard"><button style={{padding:'10px 16px', marginLeft:12}}>Go to dashboard</button></Link>
      </div>
    </main>
  )
}
