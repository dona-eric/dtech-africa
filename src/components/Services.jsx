import React from 'react'
import { Code, Cpu, BookOpen, Layers } from 'lucide-react'

const ServiceCard = ({icon, title, children}) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
    <div className="text-sky-600 mb-3">{icon}</div>
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-sm text-slate-600">{children}</p>
  </div>
)

export default function Services(){
  return (
    <section id="services" className="container mx-auto px-6 py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Nos services</h2>
        <p className="mt-2 text-slate-600">Des offres pour les entreprises, les étudiants et les institutions.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceCard icon={<Code size={28} />} title="Développement Web">Sites vitrines, e-commerce et applications web sur-mesure.</ServiceCard>
        <ServiceCard icon={<Cpu size={28} />} title="Data & IA">Analyse de données, Machine Learning et solutions IA sur-mesure.</ServiceCard>
        <ServiceCard icon={<BookOpen size={28} />} title="Formations & Mentorat">Bootcamps, cours pratiques et mentorat professionnel.</ServiceCard>
        <ServiceCard icon={<Layers size={28} />} title="Solutions d'entreprise">ERP, CRM, chatbots et intégrations métiers.</ServiceCard>
      </div>
    </section>
  )
}
