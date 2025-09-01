import React from 'react'

const Testimonial = ({quote, author, role}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <p className="text-slate-700">“{quote}”</p>
    <div className="mt-4 text-sm text-slate-500">— {author}, <span className="italic">{role}</span></div>
  </div>
)

export default function Testimonials(){
  const items = [
    {quote:'La formation m’a permis d’obtenir un premier contrat en tant que data analyste.', author:'Fatou', role:'Ancienne stagiaire'},
    {quote:'Excellent accompagnement et projets concrets.', author:'Agence X', role:'Client'}
  ]

  return (
    <section id="testimonials" className="container mx-auto px-6 py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Témoignages & partenaires</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {items.map((t,i) => <Testimonial key={i} {...t} />)}
      </div>

      <div className="mt-10 text-center">
        <h4 className="font-semibold">Nos partenaires</h4>
        <div className="mt-4 flex items-center justify-center gap-6">
          <img src="/partner1.png" alt="partner" className="h-8 object-contain" />
          <img src="/partner2.png" alt="partner" className="h-8 object-contain" />
        </div>
      </div>
    </section>
  )
}
