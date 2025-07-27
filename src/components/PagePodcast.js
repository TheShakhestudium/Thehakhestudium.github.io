import React, { useEffect, useRef, useState } from 'react';

const content = {
  es: { title: "Podcast" },
  en: { title: "Podcast" }
};

const PODCAST_SPOTIFY_URL = "https://open.spotify.com/show/7fZ1Qw4kQw8Qw4kQw8Qw8Q"; // Cambia por tu URL real
const PODCAST_YOUTUBE_URL = "https://www.youtube.com/@TheShakhestudium"; // Cambia por tu URL real
const SPOTIFY_EMBED_URL = "https://open.spotify.com/embed/show/7fZ1Qw4kQw8Qw4kQw8Qw8Q?utm_source=generator"; // Cambia por tu embed real

const PagePodcast = ({ language = 'es' }) => {
  const sectionRef = useRef(null);
  const [showPlayer, setShowPlayer] = useState(true); // Cambia a false si quieres mostrar solo el placeholder

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
    <section className="py-24 px-6 text-center" ref={sectionRef}>
      <h2 className="text-4xl font-bold text-gold mb-6">
        {content[language].title}
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-[#0A0A0A] mb-8">
        {language === 'es'
          ? 'Escucha nuestros episodios más recientes aquí.'
          : 'Listen to our latest episodes here.'}
      </p>
      <div className="flex flex-col items-center gap-4 mb-8">
        <a
          href={PODCAST_SPOTIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full bg-[#1db954] text-white font-bold shadow hover:bg-[#169c46] transition"
        >
          {language === 'es' ? 'Escuchar en Spotify' : 'Listen on Spotify'}
        </a>
        <a
          href={PODCAST_YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full bg-[#FF0000] text-white font-bold shadow hover:bg-[#c20000] transition"
        >
          {language === 'es' ? 'Ver en YouTube' : 'Watch on YouTube'}
        </a>
      </div>
      {showPlayer ? (
        <div className="flex justify-center fade-in">
          <iframe
            src={SPOTIFY_EMBED_URL}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg shadow-lg max-w-xl w-full animate-fade-in"
            title="Spotify Podcast Player"
          ></iframe>
        </div>
      ) : (
        <div className="text-xl text-gold font-semibold mt-12 animate-fade-in">
          {language === 'es' ? 'Próximamente' : 'Coming soon'}
        </div>
      )}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1.2s ease;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(24px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </section>
  );
};

export default PagePodcast;