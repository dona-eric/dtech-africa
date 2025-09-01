import React from 'react'

const Project = ({img, title, desc}) => (
  <div className="bg-white rounded-lg shadow overflow-hidden">
    <img src={img} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  </div>
)

export default function Portfolio(){
  const projects = [
    {img:'/portfolio-ecommerce.jpg', title:'E-commerce pour PME', desc:'Site e-commerce et intégration paiement.'},
    {img:'/portfolio-dashboard.jpg', title:'Dashboard data', desc:'Tableau de bord interactif pour prise de décision.'},
    {img:'/portfolio-chatbot.jpg', title:'Chatbot éducatif', desc:'Assistant IA pour supports pédagogiques.'}
  ]

  return (
    <section id="portfolio" className="container mx-auto px-6 py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Nos réalisations</h2>
        <p className="mt-2 text-slate-600">Quelques projets pour illustrer notre savoir-faire.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => <Project key={p.title} {...p} />)}
      </div>
    </section>
  )
}
