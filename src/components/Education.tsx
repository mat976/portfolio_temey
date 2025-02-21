import React from 'react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  country: string;
  level?: string;
  icon?: string;
}

interface Language {
  name: string;
  level: string;
  isNative?: boolean;
  icon?: string;
}

interface Hobby {
  name: string;
  description: string;
  icon: string;
  years: number;
}

const educationData: Education[] = [
  {
    degree: "BUT Génie Biologique",
    institution: "IUT de Saint-Pierre",
    period: "16/08/2022 – En cours",
    location: "Saint-Pierre",
    country: "France",
    level: "Niveau 6 CEC",
    icon: "🎓"
  }
];

const languages: Language[] = [
  {
    name: "Français",
    level: "Natif",
    isNative: true,
    icon: "🇫🇷"
  }
];

const hobbies: Hobby[] = [
  {
    name: "Equitation",
    description: "Je pratique l'équitation depuis plus de 10 ans, c'est un sport qui demande beaucoup de patience et d'écoute.",
    icon: "🐎",
    years: 10
  },
  {
    name: "Randonnée",
    description: "Pratiquante de randonnée depuis 8 ans, c'est un sport qui demande une endurance et concentration constante.",
    icon: "🏃‍♀️",
    years: 8
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-eco-green/5 rounded-full -ml-32 -mt-32"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-eco-green/5 rounded-full -mr-32 -mb-32"></div>

      <div className="container mx-auto px-4 relative">
        {/* Education and Languages Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <span className="text-eco-green font-medium mb-2 block">Mon Parcours</span>
            <h2 className="text-4xl font-bold mb-3 text-gray-800">Formation & Compétences</h2>
            <div className="w-24 h-1 bg-eco-green mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
            {/* Education Column */}
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-800 inline-flex items-center gap-3">
                  <span className="w-8 h-8 bg-eco-green/10 rounded-full flex items-center justify-center">
                    📚
                  </span>
                  Formation
                </h3>
              </div>
              {educationData.map((edu, index) => (
                <div key={index} 
                  className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-eco-green">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{edu.icon}</span>
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-eco-green transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-eco-green font-medium mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm">
                          📅 {edu.period}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm">
                          📍 {edu.location}, {edu.country}
                        </span>
                      </div>
                      {edu.level && (
                        <div className="inline-flex items-center px-4 py-2 bg-eco-green/10 rounded-full text-eco-green gap-2">
                          <span className="text-sm">🎯</span>
                          {edu.level}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages Column */}
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-800 inline-flex items-center gap-3">
                  <span className="w-8 h-8 bg-eco-green/10 rounded-full flex items-center justify-center">
                    🗣️
                  </span>
                  Langues
                </h3>
              </div>
              {languages.map((lang, index) => (
                <div key={index} 
                  className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-eco-green">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{lang.icon}</span>
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-eco-green transition-colors">
                        {lang.name}
                      </h4>
                      <p className="text-eco-green font-medium">
                        {lang.isNative ? "Langue maternelle" : lang.level}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hobbies Section */}
        <div>
          <div className="text-center mb-16">
            <span className="text-eco-green font-medium mb-2 block">Mes Passions</span>
            <h2 className="text-4xl font-bold mb-3 text-gray-800">Loisirs et Centres d'Intérêt</h2>
            <div className="w-24 h-1 bg-eco-green mx-auto rounded-full"></div>
          </div>
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
            {hobbies.map((hobby, index) => (
              <div key={index} 
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-eco-green overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-eco-green/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{hobby.icon}</span>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-eco-green transition-colors">
                        {hobby.name}
                      </h3>
                      <span className="text-eco-green text-sm">
                        {hobby.years} ans de pratique
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{hobby.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
