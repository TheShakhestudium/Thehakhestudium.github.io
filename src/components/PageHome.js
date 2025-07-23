import React, { useEffect, useRef } from 'react';

const PageHome = ({ language = 'es', onViewChange = () => {} }) => {
  const slogan = {
    es: "En silencio y en contracorriente. No para vencer, sino para descifrar.",
    en: "Silent and against the current. Not to conquer, but to decode.",
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          } else {
            entry.target.classList.remove('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center text-center p-8 pt-24 overflow-hidden opacity-0 transform translate-y-10 transition-all duration-1000 ease-out">
      <div className="absolute inset-0 z-0">
        <img
          src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc05qXptFHlPJ2lHWg1yuOpCAfMUdoxrSLcIq6Z"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0A0A] opacity-50"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-[#FFF9ED]">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight mb-6 text-[#BD9435]">
          THESHAKHESTUDIUM
        </h1>
        <p className="text-xl md:text-2xl font-inter mb-10">
          {slogan[language]}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => onViewChange('podcast')}
            className="px-8 py-4 bg-[#BD9435] text-[#FFF9ED] text-lg font-inter font-medium rounded-full shadow-lg hover:bg-[#C82330] transition-all duration-300 transform hover:scale-105"
          >
            {language === 'es' ? 'Escucha el podcast' : 'Listen to the podcast'}
          </button>
          <button
            onClick={() => onViewChange('manifesto')}
            className="px-8 py-4 border-2 border-[#BD9435] text-[#FFF9ED] text-lg font-inter font-medium rounded-full shadow-lg hover:bg-[#BD9435] hover:text-[#0A0A0A] transition-all duration-300 transform hover:scale-105"
          >
            {language === 'es' ? 'Explora el manifiesto' : 'Explore the manifesto'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PageHome;