import React, { useEffect, useRef } from 'react';

export default function PageLegal({ language }) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString(language === 'es' ? 'es-MX' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const content = {
    es: {
      title: 'Aviso Legal',
      owner: 'Titular del sitio:',
      ownerName: 'The Shakhestudium LLC',
      contact: 'Contacto:',
      contactEmail: 'theshakhestudium@theshakhestudium.com',
      section1Title: '1. Propiedad Intelectual',
      section1Text: 'Todos los contenidos (textos, imágenes, logotipos, audios, vídeos, código) son propiedad de The Shakhestudium LLC o de sus licenciantes. Se prohíbe su reproducción sin autorización.',
      section2Title: '2. Responsabilidad',
      section2Text: 'No nos responsabilizamos por el uso indebido de los contenidos ni por daños derivados del acceso o uso del sitio.',
      section3Title: '3. Enlaces Externos',
      section3Text: 'Este sitio puede contener enlaces a sitios de terceros. No tenemos control ni responsabilidad sobre sus contenidos o políticas.',
      section4Title: '4. Legislación Aplicable',
      section4Text: 'Este aviso se rige por la legislación de los Estados Unidos Mexicanos. Cualquier controversia se someterá a los tribunales de la Ciudad de México.',
      section5Title: '5. Cambios',
      section5Text: 'Nos reservamos el derecho de modificar este aviso legal. La versión vigente y la fecha de actualización aparecerán aquí.'
    },
    en: {
      title: 'Legal Notice',
      owner: 'Site owner:',
      ownerName: 'The Shakhestudium LLC',
      contact: 'Contact:',
      contactEmail: 'theshakhestudium@theshakhestudium.com',
      section1Title: '1. Intellectual Property',
      section1Text: 'All content (text, images, logos, audio, video, code) is owned by The Shakhestudium LLC or its licensors. Reproduction without permission is prohibited.',
      section2Title: '2. Liability',
      section2Text: 'We are not responsible for misuse of content or for damages arising from access or use of the site.',
      section3Title: '3. External Links',
      section3Text: 'This site may contain links to third-party sites. We have no control over or responsibility for their content or policies.',
      section4Title: '4. Governing Law',
      section4Text: 'This notice is governed by the laws of the United Mexican States. Any dispute will be submitted to the courts of Mexico City.',
      section5Title: '5. Changes',
      section5Text: 'We reserve the right to modify this legal notice. The current version and update date will appear here.'
    }
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
    <section className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gold mb-4 text-center">
        {content[language].title}
      </h2>
      <div className="space-y-4 text-[#0A0A0A] text-lg leading-relaxed">
        <p><strong>{content[language].owner}</strong> {content[language].ownerName}</p>
        <p><strong>{content[language].contact}</strong> {content[language].contactEmail}</p>

        <h3 className="text-xl font-semibold text-[#BD9435]">{content[language].section1Title}</h3>
        <p>{content[language].section1Text}</p>

        <h3 className="text-xl font-semibold text-[#BD9435]">{content[language].section2Title}</h3>
        <p>{content[language].section2Text}</p>

        <h3 className="text-xl font-semibold text-[#BD9435]">{content[language].section3Title}</h3>
        <p>{content[language].section3Text}</p>

        <h3 className="text-xl font-semibold text-[#BD9435]">{content[language].section4Title}</h3>
        <p>{content[language].section4Text}</p>

        <h3 className="text-xl font-semibold text-[#BD9435]">{content[language].section5Title}</h3>
        <p>{content[language].section5Text}</p>
      </div>
      <div className="text-sm text-gray-500 mt-8 text-center">
        {language === 'es'
          ? `Última actualización: ${formattedDate}`
          : `Last updated: ${formattedDate}`}
      </div>
    </section>
  );
};