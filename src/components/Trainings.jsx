import React from "react";
import { motion } from "framer-motion";

const CourseCard = ({ title, duration, level, target, children }) => (
  <motion.div
    className="p-6 rounded-2xl 
               bg-slate-900/80 backdrop-blur-md 
               border border-white/10 
               shadow-xl hover:shadow-2xl hover:scale-105 
               transition-transform cursor-pointer"
    whileHover={{ scale: 1.05 }}
  >
    <h4 className="font-semibold text-lg text-white">{title}</h4>
    <p className="mt-2 text-slate-300 text-sm leading-relaxed">{children}</p>

    <div className="mt-4 flex flex-wrap gap-2 text-xs">
      <span className="bg-indigo-600/30 text-indigo-200 px-3 py-1 rounded-full font-medium">
        Durée: {duration}
      </span>
      <span className="bg-green-600/30 text-green-200 px-3 py-1 rounded-full font-medium">
        Niveau: {level}
      </span>
      <span className="bg-orange-600/30 text-orange-200 px-3 py-1 rounded-full font-medium">
        {target}
      </span>
    </div>

    <div className="mt-6">
      <a
        href="/signup"
        className="inline-block w-full text-center px-6 py-2 rounded-full 
                   text-white font-medium shadow-md 
                   bg-gradient-to-r from-indigo-600 to-purple-600 
                   hover:from-indigo-700 hover:to-purple-700 
                   transition"
      >
        S'inscrire
      </a>
    </div>
  </motion.div>
);

export default function Trainings() {
  const courses = [
    {
      title: "Développement Web Fullstack",
      duration: "8 semaines",
      level: "Intermédiaire",
      target: "Développeurs juniors",
    },
    {
      title: "Data Science & Machine Learning",
      duration: "10 semaines",
      level: "Intermédiaire",
      target: "Analystes & étudiants",
    },
    {
      title: "Intelligence Artificielle appliquée",
      duration: "12 semaines",
      level: "Avancé",
      target: "Ingénieurs & startups",
    },
    {
      title: "Cloud & DevOps",
      duration: "6 semaines",
      level: "Débutant → Intermédiaire",
      target: "Ops & développeurs",
    },
  ];

  return (
    <section
      id="formations"
      className="bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent inline-block">
          Nos formations
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          Catalogue de programmes pratiques et orientés métier, adaptés à tous
          les niveaux.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {courses.map((c) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CourseCard {...c}>{c.target}</CourseCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
