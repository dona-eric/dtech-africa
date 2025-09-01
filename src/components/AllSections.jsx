import React from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Trainings from './Trainings'
import Portfolio from './Portfolio'
import Team from './Team'
import Testimonials from './Testimonials'
import ContactForm from './ContactForm'

export default function AllSections(){
  return (
    <div className="space-y-24">
      <Hero />
      <About />
      <Services />
      <Trainings />
      <Portfolio />
      <Team />
      <Testimonials />
      <section id="contact" className="container mx-auto px-6">
        <ContactForm />
      </section>
    </div>
  )
}
