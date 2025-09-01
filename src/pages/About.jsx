import React from "react"
import { motion } from "framer-motion"
import { Users, Target, Heart } from "lucide-react"
import AboutSection from "../components/About"

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 animate-gradient-x"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          À propos de <span>DTech Africa</span>
        </motion.h2>
        <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl mx-auto text-lg">
          Nous créons des solutions digitales innovantes pour accompagner les entreprises et former la nouvelle génération de talents en Afrique.
        </p>
      </header>

      {/* About Section */}
      <AboutSection />

      {/* Mission / Valeurs */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {[
          {
            icon: <Target className="w-12 h-12 text-gradient" />,
            title: "Notre Mission",
            desc: "Fournir des solutions numériques adaptées aux besoins du continent africain et accélérer la transformation digitale.",
          },
          {
            icon: <Users className="w-12 h-12 text-gradient" />,
            title: "Notre Équipe",
            desc: "Formateurs, mentors et experts passionnés qui accompagnent chaque projet et chaque étudiant.",
          },
          {
            icon: <Heart className="w-12 h-12 text-gradient" />,
            title: "Nos Valeurs",
            desc: "Innovation, partage et impact social : nous croyons en la puissance du numérique pour transformer des vies.",
          },
        ].map((item, idx) => (
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

      <style>
        {`
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 4s ease infinite;
          }
          .text-gradient {
            background-clip: text;
            text-fill-color: transparent;
            background-image: linear-gradient(45deg, #f472b6, #a78bfa, #38bdf8);
          }
        `}
      </style>
    </div>
  )
}
