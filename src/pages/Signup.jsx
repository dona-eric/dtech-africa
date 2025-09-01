import React, {useState} from 'react'

export default function Signup(){
  const [form, setForm] = useState({name:'', email:'', phone:'', programme:''})
  async function submit(e){
    e.preventDefault()
    const res = await fetch(import.meta.env.VITE_API_URL + '/signup', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form)})
    if(res.ok) alert('Inscription reçue')
    else alert('Erreur')
  }

  return (
    <div className="max-w-md">
      <h2 className="text-2xl font-semibold">Rejoindre une formation</h2>
      <form onSubmit={submit} className="mt-4 flex flex-col gap-2">
        <input className="p-2 border" placeholder="Nom" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        <input className="p-2 border" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <input className="p-2 border" placeholder="Téléphone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
        <input className="p-2 border" placeholder="Programme" value={form.programme} onChange={e=>setForm({...form,programme:e.target.value})} />
        <button className="bg-orange-500 text-white px-4 py-2 rounded">S'inscrire</button>
      </form>
    </div>
  )
}
