import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Team from '../components/Team'
import Trainings from '../components/Trainings'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'

export default function Home(){
  return (
    <main className="space-y-24">
      <Hero />
      <About />
      <Services />
      <Trainings />
      <Portfolio />
      <Team />
      <Testimonials />
      <section id="contact" className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Contactez-nous</h2>
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
