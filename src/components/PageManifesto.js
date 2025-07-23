import React, { useEffect, useRef } from 'react';

const PageManifesto = ({ language = 'es' }) => {
  const content = {
    es: {
      title: 'Manifiesto',
      text1: 'En THESHAKHESTUDIUM exploramos la transformación integral con un enfoque sistemático y analítico. Cuestionamos convicciones heredadas, tabúes institucionales y relatos oficiales, y facilitamos el descubrimiento colaborativo de realidades ocultas mediante procesos participativos y diálogo constructivo.',
      text2: 'Nuestros valores corporativos —Honestidad, Veracidad y Empatía— orientan cada fase de nuestro enfoque:',
      text3: 'Honestidad: compartimos metodologías y procesos con total transparencia.',
      text4: 'Veracidad: fundamentamos nuestra exploración en datos precisos y fuentes fiables.',
      text5: 'Empatía: creamos espacios que integran perspectivas diversas y fomentan el consenso.',
      text6: 'En cada episodio, artículo e imagen, planteamos preguntas transformadoras que invitan a:',
      text7: 'Detectar grietas en sus propios marcos mentales.',
      text8: 'Desencadenar ideas innovadoras y disruptivas.',
      text9: 'Co-crear narrativas que trasciendan el consenso cómodo.',
      text10: 'En lugar de ofrecer fórmulas universales, nuestro propósito es generar diálogo crítico y cocreación de conocimiento.',
      text11: 'Como colaborador estratégico en procesos de cambio profundo, combinamos análisis riguroso con métodos participativos —respaldados por rigor académico y diseño reflexivo— para orientar perspectivas en evolución e inspirar acciones conscientes.',
    },
    en: {
      title: 'Manifesto',
      text1: 'At THESHAKHESTUDIUM we explore integral transformation through a systematic, analytical lens. We question inherited convictions, institutional taboos and official narratives, and facilitate the collaborative discovery of hidden realities via participatory processes and constructive dialogue.',
      text2: 'Our corporate values—Honesty, Truthfulness, and Empathy—inform every phase of our approach:',
      text3: 'Honesty: sharing our methodologies and processes with full transparency.',
      text4: 'Truthfulness: grounding our exploration in accurate data and reliable sources.',
      text5: 'Empathy: creating spaces that integrate diverse perspectives and foster consensus.',
      text6: 'In each episode, article, and image, we pose transformative questions that empower individuals and organizations to:',
      text7: 'Spot the cracks in their mental frameworks.',
      text8: 'Spark disruptive innovation.',
      text9: 'Co-create narratives that go beyond comfortable consensus.',
      text10: 'Rather than offering universal formulas, we aim to spark critical dialogue and collaborative knowledge creation.',
      text11: 'As a strategic collaborator in processes of deep change, we blend rigorous analysis with participatory methods—supported by academic rigor and thoughtful design—to guide evolving perspectives and inspired action.',
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
        <div className="space-y-6 text-[#FFF9ED] text-lg font-inter leading-relaxed">
          <p>{content[language].text1}</p>
          <p>{content[language].text2}</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>{content[language].text3}</li>
            <li>{content[language].text4}</li>
            <li>{content[language].text5}</li>
          </ul>
          <p>{content[language].text6}</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>{content[language].text7}</li>
            <li>{content[language].text8}</li>
            <li>{content[language].text9}</li>
          </ul>
          <p>{content[language].text10}</p>
          <p>{content[language].text11}</p>
        </div>
      </div>
    </section>
  );
};

export default PageManifesto;