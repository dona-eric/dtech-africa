import React, { useState } from "react";
import { motion } from "framer-motion";
import { api } from "../api/api";

const projects = [
  {
    title: "Site e-commerce",
    category: "Web",
    image: "/projects/ecommerce.png",
    description: "Création d’un site e-commerce moderne et responsive.",
  },
  {
    title: "Analyse de données",
    category: "Data & IA",
    image: "/projects/data.png",
    description: "Projet de Machine Learning pour prédiction de ventes.",
  },
  {
    title: "Application mobile",
    category: "Web",
    image: "/projects/mobile.png",
    description: "Application mobile pour gestion d’événements.",
  },
  {
    title: "Plateforme éducative",
    category: "Formation",
    image: "/projects/learning.png",
    description: "Plateforme e-learning avec suivi des étudiants.",
  },
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="relative container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Projets & Réalisations
        </h2>
        <p className="text-slate-600 mt-2 max-w-xl mx-auto">
          Exemples de travaux, démos et cas clients que nous avons réalisés.
        </p>
      </div>

      {/* Filtres */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["All", "Web", "Data & IA", "Formation"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              filter === cat
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-indigo-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center text-white p-4">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="mt-2 text-sm">{proj.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
