import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Team from "../components/Team";
import Trainings from "../components/Trainings";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main className="scroll-smooth bg-slate-950 text-white">
      {/* Hero interactif avec CTA */}
      <Hero />

      {/* About */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900"
      >
        <About />
      </motion.section>

      {/* Trainings */}
      <motion.section
        id="trainings"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900"
      >
        <Trainings />
      </motion.section>

      {/* Team */}
      <motion.section
        id="team"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900"
      >
        <Team />
      </motion.section>

      {/* Testimonials */}
      <motion.section
        id="testimonials"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900"
      >
        <Testimonials />
      </motion.section>

      {/* Contact (coordonnées uniquement, centrées) */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            📩 Contactez-nous
          </h2>
          <p className="text-slate-400 mb-12">
            Une question ? Un projet ? Nous sommes à votre écoute.
          </p>

          {/* Coordonnées centrées */}
          <div className="max-w-xl mx-auto bg-slate-900/80 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-2xl hover:shadow-indigo-900/40 transition">
            <h3 className="font-semibold mb-6 text-2xl text-white">
              Nos coordonnées
            </h3>
            <ul className="space-y-4 text-slate-300">
              <li>
                📧 Email :{" "}
                <a
                  href="mailto:contact@dtech.africa"
                  className="text-indigo-400 hover:underline"
                >
                  contact@dtech.africa
                </a>
              </li>
              <li>
                💬 WhatsApp :{" "}
                <a
                  href="https://wa.me/+2290141730240"
                  className="text-green-400 hover:underline"
                >
                  +229 01 41 73 02 40
                </a>
              </li>
              <li>
                🔗 LinkedIn :{" "}
                <a
                  href="https://linkedin.com/in/dtech-africa"
                  className="text-blue-400 hover:underline"
                >
                  company/dtech-africa
                </a>
              </li>
              <li className="mt-4">📍 Bénin, Abomey-Calavi</li>
            </ul>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
