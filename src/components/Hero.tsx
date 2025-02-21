import React from 'react';
import profileImage from '../assets/img/images.png';

const Hero = () => {
  return (
    <section id="about" className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-nature to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 w-48 md:w-96 h-48 md:h-96 bg-sprout/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-24 top-1/2 w-48 md:w-96 h-48 md:h-96 bg-leaf/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative px-4 py-10 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <img 
              src={profileImage}
              alt="Photo de profil" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto border-4 border-eco-green shadow-xl object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-eco-green animate-fade-in">
            Temey Faïnou
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-leaf">
            Ingénieur Agro-alimentaire
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Passionné par l'innovation dans l'agro-alimentaire, je développe des solutions 
            durables pour répondre aux défis de demain.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a 
              href="#projects" 
              className="bg-eco-green text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-leaf transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Voir mes projets
            </a>
            <a 
              href="#contact" 
              className="border-2 border-eco-green text-eco-green px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-eco-green hover:text-white transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
