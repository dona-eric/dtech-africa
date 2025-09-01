import React, {useState} from 'react'

export default function SignupForm(){
  const [form, setForm] = useState({name:'', email:'', phone:'', programme:''})
  const [status, setStatus] = useState(null)

  async function submit(e){
    e.preventDefault()
    setStatus('sending')
    try{
      const res = await fetch(import.meta.env.VITE_API_URL + '/signup', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form)})
      if(res.ok) setStatus('sent')
      else setStatus('error')
    }catch(err){ setStatus('error') }
  }

  return (
    <form onSubmit={submit} className="space-y-3 bg-white p-4 rounded shadow">
      <input className="w-full p-2 border" placeholder="Nom" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
      <input className="w-full p-2 border" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
      <input className="w-full p-2 border" placeholder="Téléphone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
      <input className="w-full p-2 border" placeholder="Programme" value={form.programme} onChange={e=>setForm({...form,programme:e.target.value})} />
      <div className="flex items-center justify-between">
        <button className="px-4 py-2 bg-orange-500 text-white rounded">S'inscrire</button>
        <div className="text-sm text-slate-500">{status === 'sending' ? 'Envoi...' : status === 'sent' ? 'Inscription reçue' : status === 'error' ? 'Erreur' : ''}</div>
      </div>
    </form>
  )
}
