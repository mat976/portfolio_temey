import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Education from './components/Education'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-nature py-6 text-center text-eco-green">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Temey. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
