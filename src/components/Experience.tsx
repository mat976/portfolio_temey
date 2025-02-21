import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  country: string;
  period: string;
  responsibilities: string[];
  icon: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Stage - Technicienne de laboratoire scientifique",
    company: "SCOBY DOUX - Iris CAUCHY",
    location: "Piton Saint-Leu",
    country: "France",
    period: "22/01/2024 – 17/03/2024",
    responsibilities: [
      "Mise en place d'une démarche qualité",
      "Elaboration d'un nouveau produit"
    ],
    icon: "🧪"
  },
  {
    title: "Stage - Ouvrier en agroalimentaire",
    company: "Boulangerie Yong - Alix BOULANGER",
    location: "Etang Salé",
    country: "France",
    period: "19/12/2019 – 06/01/2023",
    responsibilities: [
      "Montage des pâtisseries",
      "Découpage de gâteaux",
      "Conditionnement et stockage"
    ],
    icon: "🥖"
  },
  {
    title: "Stage - Vétérinaire",
    company: "Cabinet Vétérinaire des Grègues - Emilie LEGER",
    location: "Saint - Joseph",
    country: "France",
    period: "03/02/2019 – 05/02/2019",
    responsibilities: [
      "Stage d'observation",
      "Aide au soin des animaux",
      "Aide à la préparation du matériel"
    ],
    icon: "🐾"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 text-gray-800">Expérience Professionnelle</h2>
          <div className="w-24 h-1 bg-eco-green mx-auto rounded-full"></div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-eco-green relative overflow-hidden"
            >
              {/* Decorative background circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-eco-green/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <span className="text-4xl mb-4 block" role="img" aria-label={exp.title}>
                  {exp.icon}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {exp.title}
                </h3>

                {/* Company */}
                <p className="text-eco-green font-medium mb-2">
                  {exp.company}
                </p>

                {/* Location and Period */}
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {exp.location}, {exp.country}
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-eco-green mt-1">•</span>
                      <span className="text-gray-600">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
