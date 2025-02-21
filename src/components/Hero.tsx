import React from 'react';
import profileImage from '../assets/img/images.png';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-eco-green/5 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-eco-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-eco-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <img 
              src={profileImage}
              alt="Photo de profil" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-eco-green shadow-xl object-cover"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
            Temey Faïnou
          </h1>
          <p className="text-2xl md:text-3xl text-eco-green mb-8 animate-slide-up">
            Ingénieur Agro-alimentaire
          </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 animate-fade-in">
            Passionné par l'innovation dans l'agro-alimentaire, je développe des solutions durables pour répondre aux défis de demain.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-eco-green text-white rounded-full font-medium hover:bg-eco-green/90 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Me Contacter
            </a>
            <a
              href="#projects"
              className="inline-block px-8 py-4 bg-white text-eco-green rounded-full font-medium hover:bg-eco-green/5 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Voir mes Projets
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-eco-green"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
