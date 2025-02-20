import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Expertise Technique",
      items: ["Sécurité Alimentaire", "HACCP", "Contrôle Qualité", "R&D Alimentaire"]
    },
    {
      category: "Outils & Méthodes",
      items: ["Gestion de Projet", "Analyse Sensorielle", "Normes ISO", "Traçabilité"]
    },
    {
      category: "Soft Skills",
      items: ["Communication", "Travail d'équipe", "Résolution de problèmes", "Adaptabilité"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-nature">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-eco-green">Compétences</h2>
        <p className="text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          Mon expertise en agro-alimentaire couvre plusieurs domaines clés
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-4 text-eco-green">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="flex items-center text-gray-700 group">
                    <svg 
                      className="w-5 h-5 text-leaf mr-2 transform group-hover:scale-110 transition-transform" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      />
                    </svg>
                    <span className="group-hover:text-eco-green transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
