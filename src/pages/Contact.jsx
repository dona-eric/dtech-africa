import React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <header className="text-center mb-10">
        <motion.h2
          className="text-4xl font-bold text-slate-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contactez-<span className="text-indigo-600">nous</span>
        </motion.h2>
        <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
          Utilisez le formulaire ou nos coordonnées pour entrer en contact rapidement.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm />
        </motion.div>

        {/* Coordonnées + Carte */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="font-semibold text-xl mb-4">Nos coordonnées</h4>

          <div className="space-y-4 text-sm mb-6">
            <a
              href="mailto:dtech.afrik@gmail.com"
              className="flex items-center gap-3 text-slate-700 hover:text-indigo-600"
            >
              <Mail className="w-5 h-5" /> dtech.afrik@gmail.com
            </a>

            <a
              href="https://wa.me/2290141730240"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-700 hover:text-green-600"
            >
              <Phone className="w-5 h-5" /> +229 01 41 73 02 40
            </a>

            <a
              href="https://www.linkedin.com/in/dtech-africa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-700 hover:text-blue-600"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>

            <div className="flex items-center gap-3 text-slate-500">
              <MapPin className="w-5 h-5" /> Bénin, Abomey-Calavi
            </div>
          </div>

          {/* Carte Google intégrée */}
          <div className="w-full h-60 rounded-lg overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.861109064617!2d2.337!3d6.4483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8200abcd123%3A0x123456789abcdef!2sAbomey-Calavi!5e0!3m2!1sfr!2sbj!4v1700000000000"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Position DTech-Africa"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
