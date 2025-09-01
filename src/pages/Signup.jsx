import React from 'react'
import SignupForm from '../components/SignupForm'

export default function Signup(){
  return (
    <div className="container mx-auto px-6 py-8">
      <header className="mb-6">
        <h2 className="text-3xl font-bold">S'inscrire à une formation</h2>
        <p className="text-slate-600 mt-2">Choisissez votre programme et envoyez votre candidature.</p>
      </header>

      <div className="max-w-md">
        <SignupForm />
      </div>
    </div>
  )
}
