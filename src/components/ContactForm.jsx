import React, {useState} from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try{
      const res = await fetch(import.meta.env.VITE_API_URL + '/contact', {
        method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form)
      })
      if(res.ok) setStatus('sent')
      else setStatus('error')
    }catch(err){
      setStatus('error')
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Nom</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full mt-1 p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input name="email" value={form.email} onChange={handleChange} className="w-full mt-1 p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="w-full mt-1 p-2 border rounded" rows={4} />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded">Envoyer</button>
          <div className="text-sm text-slate-500">{status === 'sending' ? 'Envoi...' : status === 'sent' ? 'Message envoyé — merci!' : status === 'error' ? 'Erreur, réessayez.' : ''}</div>
        </div>
      </form>

      <div className="mt-6 text-sm text-slate-600">
        <p>Email: contact@dtech.africa</p>
        <p>WhatsApp: +229 6X XX XX XX</p>
        <p>LinkedIn: /company/dtech-africa</p>
      </div>
    </div>
  )
}
