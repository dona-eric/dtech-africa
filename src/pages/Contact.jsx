import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
    <div className="container mx-auto px-6 py-8">
      <header className="mb-6">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="text-slate-600 mt-2">Utilisez ce formulaire ou contactez-nous directement.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ContactForm />
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h4 className="font-semibold">Coordonnées</h4>
          <p className="mt-2 text-sm">Email: contact@dtech.africa</p>
          <p className="mt-1 text-sm">WhatsApp: +229 6X XX XX XX</p>
          <p className="mt-1 text-sm">LinkedIn: /company/dtech-africa</p>
          <p className="mt-4 text-sm text-slate-500">Présence principale: Bénin — interventions dans plusieurs pays africains.</p>
        </div>
      </div>
    </div>
  )
}
