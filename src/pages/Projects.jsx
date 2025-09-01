import React from 'react'
import Portfolio from '../components/Portfolio'

export default function Projects(){
  return (
    <div className="container mx-auto px-6 py-8">
      <header className="mb-6">
        <h2 className="text-3xl font-bold">Projets & Réalisations</h2>
        <p className="text-slate-600 mt-2">Exemples de travaux, démos et cas clients.</p>
      </header>
      <Portfolio />
    </div>
  )
}
