import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, BookOpen, Layers } from "lucide-react";
import { api } from "../api/api";

const services = [
  {
    title: "Développement Web",
    description: "Sites vitrines, e-commerce et applications web sur-mesure.",
    icon: <Code size={28} className="text-sky-600 animate-bounce" />,
    label: "Populaire",
  },
  {
    title: "Data & IA",
    description: "Analyse de données, Machine Learning et solutions IA sur-mesure.",
    icon: <Cpu size={28} className="text-green-600 animate-pulse" />,
  },
  {
    title: "Formations & Mentorat",
    description: "Bootcamps, cours pratiques et mentorat professionnel.",
    icon: <BookOpen size={28} className="text-purple-600 animate-bounce" />,
    label: "Nouveau",
  },
  {
    title: "Solutions d'entreprise",
    description: "ERP, CRM, chatbots et intégrations métiers.",
    icon: <Layers size={28} className="text-indigo-600 animate-pulse" />,
  },
];

const ServiceCard = ({ icon, title, description, label }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 relative cursor-pointer"
    whileHover={{ scale: 1.05, rotate: 1 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {label && (
      <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold">
        {label}
      </span>
    )}
    <div className="mb-3">{icon}</div>
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-sm text-slate-600">{description}</p>
  </motion.div>
);

export default function Services() {
  return (
    <section
      id="services"
      className="relative container mx-auto px-6 py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Nos Catalogues
        </h2>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
          Des offres pour les entreprises, les étudiants et les institutions,
          avec des solutions digitales et numériques innovantes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, idx) => (
          <ServiceCard
            key={idx}
            icon={s.icon}
            title={s.title}
            description={s.description}
            label={s.label}
          />
        ))}
      </div>

      {/* Animation de fond subtil */}
      <div className="absolute inset-0 -z-10 opacity-20 animate-gradient-slow"></div>

      <style>
        {`
          @keyframes gradientSlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-slow {
            background: linear-gradient(135deg, #c3dafe, #e9d5ff, #fbcfe8);
            background-size: 400% 400%;
            animation: gradientSlow 25s ease infinite;
          }
        `}
      </style>
    </section>
  );
}
