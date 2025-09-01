import React, {useState} from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})

  async function submit(e){
    e.preventDefault()
    await fetch(import.meta.env.VITE_API_URL + '/contact', {
      method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form)
    })
    alert('Message envoyé')
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold">Contact</h2>
      <form onSubmit={submit} className="mt-4 max-w-lg">
        <input className="w-full p-2 border" placeholder="Nom" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        <input className="w-full p-2 border mt-2" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <textarea className="w-full p-2 border mt-2" placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
        <button className="mt-2 bg-sky-900 text-white px-4 py-2 rounded">Envoyer</button>
      </form>
    </div>
  )
}
