import React from 'react';
import logo from '../assets/logo.svg';

export default function PageHome({ language, onSectionClick }) {
  const t = {
    es: {
      bienvenida: "Bienvenido a",
      titulo: "TheShakhestudium",
      parrafo: "En silencio y contracorriente. No para vencer, sino para comprender. Este espacio existe para cuestionar la narrativa y dar voz a lo que nadie se atreve a decir en público.",
      cta: "Comienza el viaje",
    },
    en: {
      bienvenida: "Welcome to",
      titulo: "TheShakhestudium",
      parrafo: "Silent and upstream. Not to prevail, but to perceive. This space exists to question the narrative and give voice to what no one dares to say out loud.",
      cta: "Begin the journey",
    }
  }[language];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] w-full">
      {/* Logo fondo */}
      <img
        src={logo}
        alt="TheShakhestudium Logo"
        className="absolute inset-0 mx-auto my-auto w-[55vw] max-w-4xl opacity-10 z-0 pointer-events-none select-none"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth: 320 }}
      />
      <div className="relative z-10 flex flex-col items-center w-full">
        <span className="text-2xl mb-2">{t.bienvenida}</span>
        <h1
          className="font-bold text-5xl md:text-6xl mb-6 text-gold transition cursor-pointer"
          tabIndex={0}
          onMouseOver={e => e.currentTarget.classList.add('animate-pulse-gold')}
          onMouseOut={e => e.currentTarget.classList.remove('animate-pulse-gold')}
          onFocus={e => e.currentTarget.classList.add('animate-pulse-gold')}
          onBlur={e => e.currentTarget.classList.remove('animate-pulse-gold')}
        >
          {t.titulo}
        </h1>
        <p className="text-lg max-w-2xl mb-8 text-center text-[#0A0A0A]">{t.parrafo}</p>
        <button
          className="cta-minimal font-bold text-xl mt-8 focus:outline-none transition text-gold hover:shadow-gold"
          style={{ background: 'none', border: 'none', color: 'inherit', padding: 0 }}
          onClick={() => onSectionClick && onSectionClick('manifesto')}
        >
          {t.cta}
        </button>
      </div>
    </section>
  );
}
