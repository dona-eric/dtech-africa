import React from 'react'

const CourseCard = ({title, duration, level, target, children}) => (
  <div className="bg-white p-5 rounded-xl shadow">
    <h4 className="font-semibold">{title}</h4>
    <p className="mt-1 text-sm text-slate-600">{children}</p>
    <div className="mt-3 text-xs text-slate-500 flex justify-between">
      <span>Durée: {duration}</span>
      <span>Niveau: {level}</span>
    </div>
    <div className="mt-4">
      <a href="/signup" className="inline-block px-4 py-2 bg-sky-600 text-white rounded">S'inscrire</a>
    </div>
  </div>
)

export default function Trainings(){
  const courses = [
    {title:'Développement Web Fullstack', duration:'8 semaines', level:'Intermédiaire', target:'Développeurs juniors'},
    {title:'Data Science & Machine Learning', duration:'10 semaines', level:'Intermédiaire', target:'Analystes & étudiants'},
    {title:'Intelligence Artificielle appliquée', duration:'12 semaines', level:'Avancé', target:'Ingénieurs & startups'},
    {title:'Cloud & DevOps', duration:'6 semaines', level:'Débutant → Intermédiaire', target:'Ops & développeurs'}
  ]

  return (
    <section id="formations" className="container mx-auto px-6 py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Nos formations</h2>
        <p className="mt-2 text-slate-600">Catalogue de programmes pratiques et orientés métier.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map(c => (
          <CourseCard key={c.title} {...c}>{c.target}</CourseCard>
        ))}
      </div>
    </section>
  )
}
