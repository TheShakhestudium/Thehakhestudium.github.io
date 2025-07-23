import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import PageHome from './components/PageHome';
import PageManifesto from './components/PageManifesto';
import PagePodcast from './components/PagePodcast';
import PageIdeas from './components/PageIdeas';
import PageServices from './components/PageServices';
import PageLegal from './components/PageLegal';
import PagePrivacy from './components/PagePrivacy';
import PageContact from './components/PageContact';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [language, setLanguage] = useState('es'); // 'es' for Spanish, 'en' for English

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
      <LayoutHeader
        currentView={currentView}
        onViewChange={handleViewChange}
        language={language}
        onLanguageChange={handleLanguageChange}
      />
      <main className="flex-grow">
        <PageHome language={language} onViewChange={handleViewChange} />
        <PageManifesto language={language} />
        <PagePodcast language={language} />
        <PageIdeas language={language} />
        <PageServices language={language} />
        <PageLegal language={language} />
        <PagePrivacy language={language} />
        <PageContact language={language} />
      </main>
      <LayoutFooter language={language} />
    </div>
  );
};

export default App;