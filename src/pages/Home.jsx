import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import About from '../components/About'
import Team from '../components/Team'
import Trainings from '../components/Trainings'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <main className="scroll-smooth">

      {/* Hero interactif avec CTA */}
      <Hero />

      {/* About avec animation */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <About />
      </motion.section>

      {/* Services avec hover animations */}
      {/* Trainings / Formations */}
      <motion.section
        id="trainings"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <Trainings />
      </motion.section>

      {/* Team / Mentors avec hover bio */}
      <motion.section
        id="team"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <Team />
      </motion.section>

      {/* Testimonials & partenaires */}
      <motion.section
        id="testimonials"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-slate-50 py-16"
      >
        <Testimonials />
      </motion.section>

      {/* Contact enrichi */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">📩 Contactez-nous</h2>
          <p className="text-center text-slate-600 mb-8">
            Une question ? Un projet ? Nous sommes à votre écoute.
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formulaire avec état interactif */}
            <ContactForm />

            {/* Coordonnées interactives */}
            <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between hover:shadow-2xl transition">
              <h3 className="font-semibold mb-4 text-lg">Nos coordonnées</h3>
              <p>Email : <a href="mailto:dtech.afrik@gmail.com" className="text-sky-600 hover:underline">contact@dtech.africa</a></p>
              <p>WhatsApp : <a href="https://wa.me/+2290141730240" className="text-green-600 hover:underline">+229 01 41 73 02 40</a></p>
              <p>LinkedIn : <a href="https://linkedin.com/in/dtech-africa" className="text-blue-700 hover:underline">/company/dtech-africa</a></p>
              <p className="mt-4 text-slate-500">📍 Bénin, Abomey-Calavi</p>
            </div>
          </div>
        </div>
      </motion.section>

    </main>
  )
}
