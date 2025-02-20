import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Optimisation Process",
      description: "Amélioration du processus de production d'une ligne de produits laitiers, résultant en une augmentation de 25% de l'efficacité",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
      tags: ["Process", "Qualité", "Innovation"]
    },
    {
      title: "Développement Produit",
      description: "Création d'une nouvelle gamme de produits bio-sourcés, de la conception à la mise en production",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
      tags: ["R&D", "Bio", "Innovation"]
    },
    {
      title: "Audit Qualité",
      description: "Mise en place d'un système de management de la qualité conforme aux normes ISO 22000",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9",
      tags: ["HACCP", "ISO 22000", "Qualité"]
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-nature">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-eco-green">Mes Projets</h2>
        <p className="text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          Découvrez quelques-uns des projets sur lesquels j'ai travaillé
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-eco-green group-hover:text-leaf transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-sprout/20 text-eco-green rounded-full text-sm font-medium transform hover:scale-105 transition-transform"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
