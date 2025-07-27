import React, { useState } from 'react';
import LayoutHeader from './LayoutHeader';
import LayoutFooter from './LayoutFooter';
import PageHome from './PageHome';
import PageManifesto from './PageManifesto';
import PageLegal from './PageLegal';
import PagePrivacy from './PagePrivacy';
import PageAbout from './PageAbout';
import PageServices from './PageServices';
import PageIdeas from './PageIdeas';
import PagePodcast from './PagePodcast';

const sections = {
  home: PageHome,
  manifesto: PageManifesto,
  legal: PageLegal,
  privacy: PagePrivacy,
  about: PageAbout,
  services: PageServices,
  ideas: PageIdeas,
  podcast: PagePodcast,
};

export default function App() {
  const [language, setLanguage] = useState('es');
  const [activeSection, setActiveSection] = useState('home');

  const SectionComponent = sections[activeSection];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FFF9ED] via-[#B0ACA3] to-[#0A0A0A]">
      <LayoutHeader
        language={language}
        onLanguageChange={setLanguage}
        onSectionClick={setActiveSection}
      />
      <main className="flex-grow pt-20">
        <SectionComponent language={language} />
      </main>
      <div className="mt-16"> {/* o mt-20, según lo que necesites */}
        {/* CTA */}
      </div>
      <LayoutFooter
        language={language}
        onSectionClick={setActiveSection}
      />
      <div className="flex gap-4">
        <a href="https://twitter.com/theshakhestudium" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://facebook.com/theshakhestudium" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://youtube.com/@theshakhestudium" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://tiktok.com/@theshakhestudium" target="_blank" rel="noopener noreferrer">TikTok</a>
        <a href="https://instagram.com/theshakhestudium" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  );
}

export default function PageAbout({ language }) {
  const t = {
    es: {
      titulo: "Acerca de",
      parrafos: [
        "En THESHAKHESTUDIUM exploramos la transformación integral...",
        // ...más párrafos...
      ]
    },
    en: {
      titulo: "About",
      parrafos: [
        "At THESHAKHESTUDIUM we explore integral transformation...",
        // ...more paragraphs...
      ]
    }
  }[language];

  return (
    <section className="max-w-3xl mx-auto px-4 py-16 pt-24">
      <h2 className="text-4xl font-bold text-gold mb-8 text-center">{t.titulo}</h2>
      <div className="space-y-6 text-[#0A0A0A] text-lg leading-relaxed">
        {t.parrafos.map((p, idx) => <p key={idx}>{p}</p>)}
      </div>
    </section>
  );
}