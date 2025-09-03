import React from "react"
import { motion } from "framer-motion"
import { Users, Target, Heart, Goal } from "lucide-react"
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
          À propos de <span>DTech-Africa</span>
        </motion.h2>
        <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl mx-auto text-lg">
          Nous créons des solutions digitales innovantes pour accompagner les entreprises et former la nouvelle génération de talents en Afrique.Notre objectif est
          d'accompagner chaque entreprise et chaque individu vers l'excellence numérique et l'innovation durable...
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
            desc: "Transformer chaque idée en solution digitale concrète. Nous accompagnons les entrepreneurs, entreprises et particuliers dans la création de produits numériques innovants, tout en offrant des formations et un accompagnement personnalisé pour développer les compétences techniques et digitales nécéssaires dans un monde en constante évolution.",
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
          {
            icon: <Goal className="w-12 h-12 text-gradient" />,
            title: "Notre Vision",
            desc: "Etre le catalyseur de l'innovation numérique en Afrique, en faisant émerger une nouvelle génération de talents capables de concevoir, deployer et gérer des solutions technologiques de pointe."
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
