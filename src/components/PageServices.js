import React, { useEffect, useRef } from 'react';

const PageServices = ({ language = 'es' }) => {
  const content = {
    es: {
      title: 'Servicios',
      intro: 'En THESHAKHESTUDIUM nos especializamos en generar contenido e insights que impulsan el pensamiento crítico y el descubrimiento colectivo:',
      service1Title: '1. Producción de Contenido y Medios',
      service1Text: 'Material editorial, audiovisual e interactivo de alta calidad—podcasts, artículos, videos y ensayos visuales—que provocan reflexión e engagement.',
      service2Title: '2. Investigación y Análisis de Narrativas',
      service2Text: 'Estudios rigurosos de relatos oficiales, mitos sociales y supuestos ocultos, sustentados en datos y fuentes verificables.',
      service3Title: '3. Colaboración Comunitaria',
      service3Text: 'Formatos digitales y dinámicas de participación diseñadas para fomentar el diálogo constructivo, integrar perspectivas diversas y co-crear conocimiento.',
      service4Title: '4. Alianzas Editoriales',
      service4Text: 'Trabajos conjuntos con creadores, investigadores y pensadores para desarrollar series y proyectos que desafíen ortodoxias y amplíen perspectivas.',
    },
    en: {
      title: 'Services',
      intro: 'At THESHAKHESTUDIUM we focus on generating insights and materials that drive critical thinking and collective discovery:',
      service1Title: '1. Content & Media Production',
      service1Text: 'High-quality editorial, audiovisual, and interactive content—podcasts, articles, videos, and visual essays—that spark reflection and engagement.',
      service2Title: '2. Research & Narrative Analysis',
      service2Text: 'Rigorous investigation of official narratives, social myths, and hidden assumptions, supported by verifiable data and sources.',
      service3Title: '3. Community Collaboration',
      service3Text: 'Digital formats and participatory prompts designed to foster constructive dialogue, integrate diverse viewpoints, and co-create knowledge.',
      service4Title: '4. Editorial Partnerships',
      service4Text: 'Collaborations with creators, researchers, and thinkers to co-develop series and projects that challenge orthodoxies and expand perspectives.',
    },
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
    <section ref={sectionRef} className="container mx-auto px-4 py-16 pt-24 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out">
      <div className="bg-[#0A0A0A] rounded-2xl shadow-xl p-8 md:p-12 lg:p-16">
        <h2 className="text-4xl font-playfair font-semibold text-[#BD9435] mb-8 text-center">
          {content[language].title}
        </h2>
        <p className="text-[#FFF9ED] text-lg font-inter leading-relaxed mb-6">
          {content[language].intro}
        </p>
        <ul className="space-y-6 text-[#FFF9ED] text-lg font-inter leading-relaxed">
          <li>
            <h3 className="text-2xl font-playfair font-semibold text-[#BD9435] mb-2">{content[language].service1Title}</h3>
            <p>{content[language].service1Text}</p>
          </li>
          <li>
            <h3 className="text-2xl font-playfair font-semibold text-[#BD9435] mb-2">{content[language].service2Title}</h3>
            <p>{content[language].service2Text}</p>
          </li>
          <li>
            <h3 className="text-2xl font-playfair font-semibold text-[#BD9435] mb-2">{content[language].service3Title}</h3>
            <p>{content[language].service3Text}</p>
          </li>
          <li>
            <h3 className="text-2xl font-playfair font-semibold text-[#BD9435] mb-2">{content[language].service4Title}</h3>
            <p>{content[language].service4Text}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PageServices;