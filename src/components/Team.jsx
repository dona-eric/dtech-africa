import React from 'react'

const Member = ({img, name, role, bio}) => (
  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
    <img src={img} alt={name} className="w-24 h-24 rounded-full mx-auto object-cover" />
    <h4 className="mt-3 font-semibold">{name}</h4>
    <p className="text-sm text-slate-600">{role}</p>
    <p className="mt-2 text-xs text-slate-500">{bio}</p>
    <div className="mt-3 flex justify-center gap-3 text-sky-600">
      <a href="#">LinkedIn</a>
      <a href="#">GitHub</a>
    </div>
  </div>
)

export default function Team(){
  const members = [
    {img:'/team-aminata.jpg', name:'Aminata Diop', role:'Formatrice Data Science', bio:'Experte en IA appliquée au secteur de la santé. +10 ans d’expérience.'},
    {img:'/team-erick.jpg', name:'Erick Schrödinger', role:'Mentor Machine Learning', bio:'Spécialiste en ML, IA et cloud. Accompagnement de startups africaines.'}
  ]

  return (
    <section id="team" className="container mx-auto px-6 py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Nos formateurs & mentors</h2>
        <p className="mt-2 text-slate-600">Une équipe d'experts engagés pour votre réussite.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {members.map(m => <Member key={m.name} {...m} />)}
      </div>
    </section>
  )
}
