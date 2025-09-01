import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Signup from './pages/Signup'

function Nav() {
  return (
    <nav className="bg-sky-900 text-white p-4">
      <div className="container mx-auto flex gap-4">
        <Link to="/" className="font-bold">DTech-Africa</Link>
        <Link to="/about">À propos</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signup" className="ml-auto bg-orange-500 px-3 py-1 rounded">Rejoindre</Link>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-sky-800 text-white p-6 mt-8">
      <div className="container mx-auto text-center">© DTech-Africa</div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
