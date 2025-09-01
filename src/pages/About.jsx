import React from 'react'
import AboutSection from '../components/About'

export default function About(){
  return (
    <div className="container mx-auto px-6 py-8">
      <header className="mb-6">
        <h2 className="text-3xl font-bold">À propos de DTech Africa</h2>
        <p className="text-slate-600 mt-2">Notre mission, nos valeurs et notre histoire.</p>
      </header>
      <AboutSection />
    </div>
  )
}
