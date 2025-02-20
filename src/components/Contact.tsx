import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 bottom-0 w-64 md:w-96 h-64 md:h-96 bg-nature rounded-full transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute -left-48 -top-48 w-64 md:w-96 h-64 md:h-96 bg-sprout/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-eco-green">Me Contacter</h2>
        <p className="text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          Vous avez un projet ou une opportunité à discuter ? Je serai ravi d'échanger avec vous.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg transform hover:shadow-xl transition-all duration-300">
            <form className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-eco-green font-medium mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-sprout focus:ring-2 focus:ring-eco-green focus:border-transparent transition-all duration-300"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-eco-green font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-sprout focus:ring-2 focus:ring-eco-green focus:border-transparent transition-all duration-300"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-eco-green font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-sprout focus:ring-2 focus:ring-eco-green focus:border-transparent transition-all duration-300"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-eco-green text-white py-3 rounded-lg font-semibold hover:bg-leaf transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Envoyer
              </button>
            </form>
          </div>

          <div className="bg-nature p-6 md:p-8 rounded-xl transform hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-eco-green mb-6">Retrouvez-moi aussi sur</h3>
            <div className="space-y-4 md:space-y-6">
              <a 
                href="#" 
                className="flex items-center space-x-4 text-gray-700 hover:text-eco-green transition-all duration-300 transform hover:translate-x-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="font-medium">LinkedIn</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-4 text-gray-700 hover:text-eco-green transition-all duration-300 transform hover:translate-x-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-medium">GitHub</span>
              </a>
              <div className="flex items-center space-x-4 text-gray-700 group">
                <svg className="w-6 h-6 group-hover:text-eco-green transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="font-medium group-hover:text-eco-green transition-colors">contact@temey.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
