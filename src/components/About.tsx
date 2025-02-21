import React from 'react';

const About = () => {
  const personalInfo = {
    name: "Temey Faïnou",
    title: "Ingénieur Agro-alimentaire",
    motto: "Innover pour un avenir alimentaire durable",
    description: "Passionné par l'innovation dans l'agro-alimentaire, je développe des solutions durables pour répondre aux défis de demain. Mon expertise combine la science alimentaire avec une approche éco-responsable pour créer des solutions innovantes et durables.",
    personalQualities: [
      {
        title: "Innovation",
        icon: "🔬",
        description: "Développement de solutions agro-alimentaires innovantes"
      },
      {
        title: "Durabilité",
        icon: "🌱",
        description: "Engagement pour des pratiques alimentaires durables"
      },
      {
        title: "Expertise",
        icon: "📊",
        description: "Maîtrise des processus agro-alimentaires"
      }
    ],
    keySkills: [
      {
        name: "Sécurité Alimentaire",
        level: 90,
        icon: "🔐"
      },
      {
        name: "Innovation Produit",
        level: 85,
        icon: "💡"
      },
      {
        name: "Contrôle Qualité",
        level: 95,
        icon: "✔️"
      }
    ],
    contactInfo: {
      phone: "(+262) 69244",
      email: "fainou.temey5@gmail.com",
      location: "Rue Suffren, 97410 Saint Pierre (Réunion)"
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-eco-green/5 rounded-full -ml-32 -mt-32"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-eco-green/5 rounded-full -mr-32 -mb-32"></div>

      <div className="container mx-auto px-4 relative">
        {/* Logo and Motto Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-eco-green rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl text-white font-bold">TF</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{personalInfo.name}</h1>
          <p className="text-xl text-eco-green font-medium mb-6">{personalInfo.title}</p>
          <div className="w-20 h-1 bg-eco-green mx-auto mb-8 rounded-full"></div>
          <p className="text-2xl text-gray-700 font-light italic max-w-2xl mx-auto">
            "{personalInfo.motto}"
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* About Description */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">À Propos</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{personalInfo.description}</p>
            
            {/* Personal Qualities */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {personalInfo.personalQualities.map((quality, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-eco-green/5 transition-colors duration-300">
                  <span className="text-3xl mb-4 block">{quality.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{quality.title}</h3>
                  <p className="text-gray-600">{quality.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Compétences Clés</h2>
            <div className="grid gap-6">
              {personalInfo.keySkills.map((skill, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-lg font-medium text-gray-800">{skill.name}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-eco-green rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <p className="text-gray-600">{personalInfo.contactInfo.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <p className="text-gray-600">{personalInfo.contactInfo.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <p className="text-gray-600">{personalInfo.contactInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
