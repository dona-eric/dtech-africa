import React from "react";
import { motion } from "framer-motion";

const CourseCard = ({ title, duration, level, target, children }) => (
  <motion.div
    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform cursor-pointer"
    whileHover={{ scale: 1.05 }}
  >
    <h4 className="font-semibold text-lg">{title}</h4>
    <p className="mt-2 text-slate-600">{children}</p>

    <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
      <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full">Durée: {duration}</span>
      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">Niveau: {level}</span>
      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full">{target}</span>
    </div>

    <div className="mt-4">
      <a
        href="/signup"
        className="inline-block px-5 py-2 bg-sky-600 text-white font-medium rounded-full hover:bg-sky-700 transition"
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
    <section id="formations" className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Nos formations</h2>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
          Catalogue de programmes pratiques et orientés métier, adaptés à tous les niveaux.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {courses.map((c) => (
          <CourseCard key={c.title} {...c}>
            {c.target}
          </CourseCard>
        ))}
      </motion.div>
    </section>
  );
}
