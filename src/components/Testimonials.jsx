import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialCard = ({ quote, author, role }) => (
  <motion.div
    className="bg-white p-6 rounded-2xl shadow-lg text-center"
    whileHover={{ scale: 1.03, boxShadow: "0 15px 25px rgba(0,0,0,0.15)" }}
  >
    <p className="text-slate-700 italic">“{quote}”</p>
    <div className="mt-4 text-sm text-slate-500">
      — {author}, <span className="font-medium">{role}</span>
    </div>
  </motion.div>
);

export default function Testimonials() {
  const items = [
    { quote: "La formation m’a permis d’obtenir un premier contrat en tant que data analyste.", author: "Fatou", role: "Ancienne stagiaire" },
    { quote: "Excellent accompagnement et projets concrets.", author: "Agence X", role: "Client" },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section id="testimonials" className="container mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Témoignages & partenaires</h2>
        <p className="text-slate-600 mt-2">Ce que nos étudiants et clients disent de nous.</p>
      </div>

      {/* Carousel témoignages */}
      <div className="max-w-2xl mx-auto relative">
        <AnimatePresence initial={false}>
          <TestimonialCard key={index} {...items[index]} />
        </AnimatePresence>
        <div className="flex justify-between mt-4">
          <button onClick={prev} className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition">Précédent</button>
          <button onClick={next} className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition">Suivant</button>
        </div>
      </div>

      {/* Partenaires */}
      <div className="mt-12 text-center">
        <h4 className="font-semibold mb-4">Nos partenaires</h4>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <motion.img src="/partner1.png" alt="partner" className="h-10 object-contain" whileHover={{ scale: 1.1 }} />
          <motion.img src="/partner2.png" alt="partner" className="h-10 object-contain" whileHover={{ scale: 1.1 }} />
        </div>
      </div>
    </section>
  );
}
