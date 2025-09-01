import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const Member = ({ img, name, role, bio, linkedin, github }) => (
  <motion.div
    className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-transform hover:scale-105"
    whileHover={{ scale: 1.05 }}
  >
    <img
      src={img}
      alt={name}
      className="w-28 h-28 rounded-full mx-auto object-cover border-2 border-sky-500"
    />
    <h4 className="mt-4 font-semibold text-lg">{name}</h4>
    <p className="text-sm text-slate-600">{role}</p>
    <p className="mt-2 text-xs text-slate-500">{bio}</p>
    <div className="mt-3 flex justify-center gap-4 text-sky-600">
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} className="hover:text-blue-700 transition" />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Github size={20} className="hover:text-gray-800 transition" />
        </a>
      )}
    </div>
  </motion.div>
);

export default function Team() {
  const members = [
    {
      img: "../assets/team-eric.jpg",
      name: "Eric KOULODJI",
      role: "Data Scientist & Ingénieur Machine Learning",
      bio: "Passionné par la science des données et l'intelligence artificielle, il mets ses compétences aux services des afriques et de toute l'humanité",
      linkedin: "Dona Eric KOULODJI",
      github: "@dona-eric",
    },
    {
      img: "../assets/team-raymond.jpg",
      name: "Raymond A. ODOUNHITAN",
      role: "Formateur, Developpeur Web Full-Stack",
      bio: "Spécialiste en Developpement Web, cloud et DevOps Accompagnement de startups africaines.",
      linkedin: "#",
      github: "#",
    },
  ];

  return (
    <section id="team" className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Nos formateurs & mentors</h2>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
          Une équipe d'experts engagés pour votre réussite.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {members.map((m) => (
          <Member key={m.name} {...m} />
        ))}
      </motion.div>
    </section>
  );
}
