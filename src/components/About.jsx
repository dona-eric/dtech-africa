import React from 'react'

const Card = ({icon, title, children}) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <div className="text-2xl">{icon}</div>
    <h4 className="mt-2 font-semibold">{title}</h4>
    <p className="mt-1 text-sm text-slate-600">{children}</p>
  </div>
)

export default function About(){
  return (
    <section id="about" className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mt-4 text-slate-500">Chez DTech-Africa, nous créons des solutions digitales innovantes pour accompagner entreprises, étudiants et institutions. Nos domaines d’expertise couvrent le développement web, la data science et l’intelligence artificielle. En parallèle, nous formons et mentorons la prochaine génération de talents africains du numérique.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transform hover:scale-105 transition duration-500">
        <Card icon={"🚀"} title="Innovation digitale">Solutions modernes pour transformer les activités.</Card>
        <Card icon={"🎓"} title="Formation & mentorat">Bootcamps, ateliers et accompagnement personnalisé.</Card>
        <Card icon={"🤝"} title="Partenariats">Collaborations avec entreprises et institutions locales.</Card>
        <Card icon={"🌍"} title="Impact">Projets orientés vers l'impact social en Afrique.</Card>
      </div>
    </section>
  )
}
