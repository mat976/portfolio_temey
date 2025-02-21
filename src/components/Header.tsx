import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-eco-green">
            Temey
          </a>

          {/* Menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-eco-green hover:bg-gray-100 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-eco-green transition-colors">
              À propos
            </a>
            <a href="#experience" className="text-gray-600 hover:text-eco-green transition-colors">
              Expérience
            </a>
            <a href="#education" className="text-gray-600 hover:text-eco-green transition-colors">
              Formation
            </a>
            <a href="#skills" className="text-gray-600 hover:text-eco-green transition-colors">
              Compétences
            </a>
            <a href="#projects" className="text-gray-600 hover:text-eco-green transition-colors">
              Projets
            </a>
            <a href="#contact" className="text-gray-600 hover:text-eco-green transition-colors">
              Contact
            </a>
          </div>

          {/* Menu mobile overlay */}
          <div 
            className={`md:hidden absolute left-0 right-0 bg-white shadow-lg transition-transform duration-200 ease-in-out transform ${
              isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-eco-green hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </a>
              <a
                href="#experience"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-eco-green hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Expérience
              </a>
              <a
                href="#education"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-eco-green hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Formation
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-eco-green hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Compétences
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-eco-green hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projets
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-eco-green hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
