import React from 'react';

const LayoutHeader = ({ currentView = 'home', onViewChange = () => {}, language = 'es', onLanguageChange = () => {} }) => {
  const menuItems = [
    { id: 'home', es: 'Inicio', en: 'Home' },
    { id: 'manifesto', es: 'Manifiesto', en: 'Manifesto' },
    { id: 'podcast', es: 'Podcast', en: 'Podcast' },
    { id: 'ideas', es: 'El Pensadero', en: 'The Thinkery' },
    { id: 'services', es: 'Servicios', en: 'Services' },
    { id: 'legal', es: 'Aviso Legal', en: 'Legal' },
    { id: 'privacy', es: 'Política de Privacidad', en: 'Privacy Policy' },
    { id: 'contact', es: 'Contacto', en: 'Contact' },
  ];

  return (
    <header className="w-full bg-[#0A0A0A] bg-opacity-80 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#BD9435] font-playfair">
          THESHAKHESTUDIUM
        </h1>
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`text-[#B0ACA3] hover:text-[#FFF9ED] transition-colors duration-300 font-inter ${
                currentView === item.id ? 'font-semibold text-[#BD9435]' : ''
              }`}
            >
              {language === 'es' ? item.es : item.en}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
            className="px-3 py-1 rounded-full bg-[#BD9435] text-[#0A0A0A] text-sm font-inter font-medium hover:bg-[#C82330] transition-colors duration-300"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <button className="md:hidden text-[#FFF9ED] text-2xl">
            {/* Simple SVG for a menu icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;