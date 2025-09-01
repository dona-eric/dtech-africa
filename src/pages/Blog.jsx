import React from 'react'

export default function Blog(){
  return (
    <div className="container mx-auto px-6 py-8">
      <header className="mb-6">
        <h2 className="text-3xl font-bold">Blog & Actualités</h2>
        <p className="text-slate-600 mt-2">Articles, annonces de cohortes et tutoriels.</p>
      </header>

      <div className="grid grid-cols-1 gap-4">
        <article className="bg-white p-4 rounded shadow"> <h3 className="font-semibold">Lancement de la cohorte Data — 2025</h3><p className="text-sm text-slate-600 mt-1">Bref résumé...</p></article>
        <article className="bg-white p-4 rounded shadow"> <h3 className="font-semibold">Comment débuter en Machine Learning</h3><p className="text-sm text-slate-600 mt-1">Astuces et ressources...</p></article>
      </div>
    </div>
  )
}
