import React, {useState} from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Signup from './pages/Signup'

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/dtech-africa-logo.png" alt="DTech-Africa" className="site-logo" />
            <span className="font-semibold text-slate-800">DTech-Africa</span>
          </Link>
        </div>

        <button className="sm:hidden" onClick={()=>setOpen(!open)} aria-label="menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>

        <div className={`hidden sm:flex sm:items-center sm:gap-6 ${open? 'block': ''}`}> 
          <Link to="/about" className="text-slate-700">À propos</Link>
          <Link to="/services" className="text-slate-700">Services</Link>
          <Link to="/projects" className="text-slate-700">Projets</Link>
          <Link to="/blog" className="text-slate-700">Blog</Link>
          <Link to="/contact" className="text-slate-700">Contact</Link>
          <Link to="/signup" className="ml-2 btn-primary">Rejoindre</Link>
        </div>
      </div>
      {open && (
        <div className="sm:hidden bg-sky-900 px-4 pb-4">
          <Link to="/about" className="block py-2">À propos</Link>
          <Link to="/services" className="block py-2">Services</Link>
          <Link to="/projects" className="block py-2">Projets</Link>
          <Link to="/blog" className="block py-2">Blog</Link>
          <Link to="/contact" className="block py-2">Contact</Link>
          <Link to="/signup" className="block py-2">Rejoindre</Link>
        </div>
      )}
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
