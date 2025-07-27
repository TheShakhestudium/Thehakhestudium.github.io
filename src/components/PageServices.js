import React, { useEffect, useRef } from 'react';

const content = {
  es: {
    titulo: "Servicios",
    intro: "En THESHAKHESTUDIUM nos especializamos en generar contenido e insights que impulsan el pensamiento crítico y el descubrimiento colectivo:",
    items: [
      "1. Producción de Contenido y Medios\nMaterial editorial, audiovisual e interactivo de alta calidad—podcasts, artículos, videos y ensayos visuales—que provocan reflexión e engagement.",
      "2. Investigación y Análisis de Narrativas\nEstudios rigurosos de relatos oficiales, mitos sociales y supuestos ocultos, sustentados en datos y fuentes verificables.",
      "3. Colaboración Comunitaria\nFormatos digitales y dinámicas de participación diseñadas para fomentar el diálogo constructivo, integrar perspectivas diversas y co-crear conocimiento.",
      "4. Alianzas Editoriales\nTrabajos conjuntos con creadores, investigadores y pensadores para desarrollar series y proyectos que desafíen ortodoxias y amplíen perspectivas."
    ],
    cta: "Contáctanos"
  },
  en: {
    titulo: "Services",
    intro: "At THESHAKHESTUDIUM we focus on generating insights and materials that drive critical thinking and collective discovery:",
    items: [
      "1. Content & Media Production\nHigh-quality editorial, audiovisual, and interactive content—podcasts, articles, videos, and visual essays—that spark reflection and engagement.",
      "2. Research & Narrative Analysis\nRigorous investigation of official narratives, social myths, and hidden assumptions, supported by verifiable data and sources.",
      "3. Community Collaboration\nDigital formats and participatory prompts designed to foster constructive dialogue, integrate diverse viewpoints, and co-create knowledge.",
      "4. Editorial Partnerships\nCollaborations with creators, researchers, and thinkers to co-develop series and projects that challenge orthodoxies and expand perspectives."
    ],
    cta: "Contact us"
  }
};

export default function PageServices({ language, onContactClick }) {
  const t = content[language];
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
    <section className="py-24 px-6 text-center" ref={sectionRef}>
      <h2 className="text-4xl font-bold text-gold mb-6">{t.titulo}</h2>
      <p className="max-w-2xl mx-auto text-lg text-[#0A0A0A] mb-8">{t.intro}</p>
      <ul className="max-w-2xl mx-auto text-left text-[#0A0A0A] space-y-6 mb-8">
        {t.items.map((item, idx) => (
          <li key={idx} className="whitespace-pre-line">{item}</li>
        ))}
      </ul>
      <button
        className="px-6 py-2 rounded font-bold bg-gold text-white shadow-gold hover:bg-[#FFD700] transition"
        onClick={onContactClick}
      >
        {t.cta}
      </button>
    </section>
  );
}