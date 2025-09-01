import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="bg-gradient-to-b from-white to-sky-50 py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <motion.h1 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-3xl sm:text-5xl font-extrabold">
            DTech Africa — Votre partenaire digital pour le développement web, la data et l’IA.
          </motion.h1>
          <p className="mt-6 text-lg text-slate-700">Nous concevons des solutions numériques et formons la prochaine génération de talents africains en tech.</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#services" className="btn-primary">Découvrez nos services</a>
            <a href="#formations" className="btn-ghost">Rejoignez une formation</a>
          </div>
        </div>

        <div className="flex-1">
          <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6}} className="w-full bg-white rounded-xl shadow-lg p-6">
            <img src="/dtech.png" onError={(e)=>{e.target.src='/hero-team.jpg'}} alt="DTech" className="w-full h-64 object-contain rounded-md" />
            <p className="mt-3 text-sm text-slate-500">Travail en équipe, innovation et apprentissage pratique.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
