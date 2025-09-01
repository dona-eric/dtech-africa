import React from 'react'
import ServicesSection from '../components/Services'

export default function Services(){
  return (
    <div className="container mx-auto px-6 py-8">
      <header className="mb-6">
        <h2 className="text-3xl font-bold">Nos services</h2>
        <p className="text-slate-600 mt-2">Découvrez nos offres pour entreprises et apprenants.</p>
      </header>
      <ServicesSection />
    </div>
  )
}
