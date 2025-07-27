import React, { useState } from 'react';
import { Element, scroller } from 'react-scroll';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import PageHome from './components/PageHome';
import PageManifesto from './components/PageManifesto';
import PageServices from './components/PageServices';
import PageIdeas from './components/PageIdeas';
import PageContact from './components/PageContact';
import Modal from './components/Modal';
import PageLegal from './components/PageLegal';
import PagePrivacy from './components/PagePrivacy';
import PagePodcast from './components/PagePodcast';

export default function App() {
  const [language, setLanguage] = useState('es');
  const [activeSection, setActiveSection] = useState('home');
  const [modal, setModal] = useState(null);

  // Scroll suave y scrollspy
  const handleSectionClick = (section) => {
    setActiveSection(section);
    scroller.scrollTo(section, {
      duration: 600,
      smooth: 'easeInOutQuart',
      offset: -72,
    });
  };

  // Modal para Legal y Privacy
  const openModal = (type) => setModal(type);
  const closeModal = () => setModal(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9ED] via-[#B0ACA3] to-[#0A0A0A]">
      <LayoutHeader
        language={language}
        onLanguageChange={setLanguage}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        onOpenModal={openModal}
      />
      <main className="pt-20">
        <Element name="home"><PageHome language={language} onSectionClick={handleSectionClick} /></Element>
        <Element name="manifesto"><PageManifesto language={language} /></Element>
        <Element name="podcast"><PagePodcast language={language} /></Element>
        <Element name="ideas"><PageIdeas language={language} /></Element>
        <Element name="services"><PageServices language={language} onContactClick={() => handleSectionClick('contact')} /></Element>
        <Element name="contact"><PageContact language={language} /></Element>
      </main>
      <LayoutFooter language={language} onOpenModal={openModal} />
      <Modal open={modal === 'legal'} onClose={closeModal}><PageLegal language={language} /></Modal>
      <Modal open={modal === 'privacy'} onClose={closeModal}><PagePrivacy language={language} /></Modal>
    </div>
  );
}