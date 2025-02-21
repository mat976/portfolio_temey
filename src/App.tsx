import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-50 py-6 text-center text-gray-600">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Sarah Martin. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
