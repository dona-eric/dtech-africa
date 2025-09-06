import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import ericImg from "../assets/team-eric.jpg";
import raymondImg from "../assets/team-raymond.jpeg";
import toussImg from "../assets/team-touss.jpeg";

const Member = ({ img, name, role, bio, linkedin, github }) => (
  <motion.div
    className="p-6 rounded-2xl 
               bg-slate-900/80 backdrop-blur-md 
               border border-white/10 
               shadow-xl hover:shadow-2xl 
               transition-transform hover:scale-105 hover:rotate-1"
    whileHover={{ scale: 1.05 }}
  >
    <img
      src={img}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto object-cover 
                 border-4 border-transparent 
                 bg-gradient-to-r from-indigo-500 to-pink-500 p-[2px] shadow-md"
    />
    <h4 className="mt-4 font-semibold text-slate-100 text-lg">{name}</h4>
    <p className="text-sm text-indigo-400 font-medium">{role}</p>
    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{bio}</p>
    <div className="mt-4 flex justify-center gap-5">
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin size={22} className="text-slate-400 hover:text-indigo-400 hover:scale-110 transition-transform" />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Github size={22} className="text-slate-400 hover:text-pink-400 hover:scale-110 transition-transform" />
        </a>
      )}
    </div>
  </motion.div>
);

export default function Team() {
  const members = [
    {
      img: ericImg,
      name: "Eric KOULODJI",
      role: "Data Scientist & Ingénieur Machine Learning",
      bio: "Passionné par la science des données et l'intelligence artificielle, il met ses compétences au service de l'Afrique et de toute l'humanité.",
      linkedin: "https://linkedin.com/in/dona-eric-koulodji",
      github: "https://github.com/dona-eric",
    },
    {
      img: raymondImg,
      name: "Raymond A. ODOUNHITAN",
      role: "Formateur, Développeur Web Full-Stack",
      bio: "Spécialiste en Développement Full-Stack Web, Cloud et DevSecOps. Il accompagne de nombreuses startups africaines.",
      linkedin: "https://linkedin.com/in/adeniran",
      github: "https://github.com/Odounhitan2000",
    },
    {
      img: toussImg,
      name: "Toussaint M. TOVITCHEDE",
      role: "Statisticien, Data Analyst",
      bio: "Passionné par l'analyse de données et les chiffres, Toussaint met son expertise en statistique et data au service de la communauté africaine et internationale.",
      linkedin: "https://linkedin.com/in/toussaint-tovitchede",
      github: "#",
    }
  ];

  return (
    <section id="team" className="bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent inline-block">
          Nos formateurs & mentors
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-pink-400 mx-auto mt-3 rounded-full"></div>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          Une équipe d'experts passionnés et engagés pour votre réussite.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {members.map((m) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Member {...m} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
