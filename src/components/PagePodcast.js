import React, { useEffect, useRef } from 'react';

const PagePodcast = ({ language = 'es' }) => {
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
    <section ref={sectionRef} className="container mx-auto px-4 py-16 pt-24 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out">
      <div className="bg-[#0A0A0A] rounded-2xl shadow-xl p-8 md:p-12 lg:p-16">
        <h2 className="text-4xl font-playfair font-semibold text-[#BD9435] mb-8 text-center">
          {language === 'es' ? 'Podcast' : 'Podcast'}
        </h2>
        <div className="flex flex-col items-center space-y-8">
          <div className="w-full max-w-2xl">
            <h3 className="text-2xl font-playfair font-semibold text-[#FFF9ED] mb-4 text-center">
              {language === 'es' ? 'Escucha en Spotify' : 'Listen on Spotify'}
            </h3>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://open.spotify.com/embed/episode/5x0x0x0x0x0x0x0x0x0x?utm_source=generator"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full rounded-xl"
              ></iframe>
            </div>
          </div>
          <div className="w-full max-w-2xl">
            <h3 className="text-2xl font-playfair font-semibold text-[#FFF9ED] mb-4 text-center">
              {language === 'es' ? 'Mira en YouTube' : 'Watch on YouTube'}
            </h3>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-[#BD9435] text-[#FFF9ED] rounded-full shadow-lg hover:bg-[#C82330] transition-colors duration-300 font-inter font-medium">
            {language === 'es' ? 'Ver todos los episodios' : 'View all episodes'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PagePodcast;