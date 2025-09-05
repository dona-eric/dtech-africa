import { BookOpenText, Handshake, Lightbulb, SquareKanban } from "lucide-react"
import { motion } from "framer-motion"
import React from "react"

const About = () => {
  const items = [
    {
      icon: <Lightbulb className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text" />,
      title: "Innovation Digitale",
      desc: "Solutions modernes pour transformer les activités.",
    },
    {
      icon: <BookOpenText className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 to-pink-500 text-transparent bg-clip-text" />,
      title: "Formation & Mentorat",
      desc: "Bootcamps, Ateliers et Accompagnement personnalisé.",
    },
    {
      icon: <Handshake className="w-12 h-12 bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 text-transparent bg-clip-text" />,
      title: "Partenariats",
      desc: "Collaborations avec entreprises et institutions locales.",
    },
    {
      icon: <SquareKanban className="w-12 h-12 bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 text-transparent bg-clip-text" />,
      title: "Impact",
      desc: "Projets orientés vers l'impact social en Afrique.",
    },
  ]

  return (
    <section id="about" className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mt-4 text-slate-500">
          Chez DTech-Africa, nous créons des solutions digitales innovantes pour accompagner entreprises, 
          étudiants et institutions. Nos domaines d’expertise couvrent le développement web, la data science et l’intelligence artificielle.
          En parallèle, nous formons et mentorons la prochaine génération de talents africains du numérique.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 text-center cursor-pointer hover:shadow-2xl transition transform hover:scale-105 hover:-translate-y-1"
            whileHover={{ rotate: [0, 2, -2, 0] }}
          >
            <div className="mx-auto mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-pink-500">
              {item.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default About
