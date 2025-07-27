import React from 'react';
import { Link } from 'react-scroll';

const menu = [
  { id: 'home', es: 'Inicio', en: 'Home' },
  { id: 'manifesto', es: 'Manifiesto', en: 'Manifesto' },
  { id: 'podcast', es: 'Podcast', en: 'Podcast' },
  { id: 'ideas', es: 'Pensadero', en: 'Thinkery' },
  { id: 'services', es: 'Servicios', en: 'Services' },
  { id: 'contact', es: 'Contacto', en: 'Contact' },
];

export default function LayoutHeader({ language, onLanguageChange, activeSection, onSectionClick, onOpenModal }) {
  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur flex items-center justify-between px-8 py-4 shadow-md">
      <div className="font-bold text-xl text-gold">TheShakhestudium</div>
      <nav className="flex gap-6">
        {menu.map(item => (
          <Link
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            offset={-72}
            duration={600}
            className={`cursor-pointer px-2 py-1 rounded transition
              ${activeSection === item.id ? 'text-gold font-bold shadow-gold' : 'hover:text-gold hover:bg-[#FFF9ED]/20'}
            `}
            onSetActive={() => onSectionClick(item.id)}
          >
            {language === 'es' ? item.es : item.en}
          </Link>
        ))}
      </nav>
      <div className="flex gap-2 items-center">
        <button onClick={() => onLanguageChange('es')} className={language === 'es' ? 'font-bold underline' : ''}>ES</button>
        <span>|</span>
        <button onClick={() => onLanguageChange('en')} className={language === 'en' ? 'font-bold underline' : ''}>EN</button>
        <button onClick={() => onOpenModal('legal')} className="ml-4 text-xs hover:text-gold">Legal</button>
        <button onClick={() => onOpenModal('privacy')} className="text-xs hover:text-gold">Privacy</button>
      </div>
    </header>
  );
}