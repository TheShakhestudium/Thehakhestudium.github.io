import React, { useEffect, useRef } from 'react';

const PageIdeas = ({ language = 'es' }) => {
  const content = {
    es: {
      title: 'El Pensadero',
      text: 'Pensadero es el laboratorio vivo de THESHAKHESTUDIUM: un espacio de reflexiones, preguntas provocadoras y microensayos que prolongan el espíritu contracultural de nuestra marca. Aquí cuestionamos convicciones heredadas, tabúes institucionales y relatos oficiales, facilitando el descubrimiento colaborativo de realidades ocultas mediante procesos participativos y diálogo constructivo. Guiados por nuestros valores de honestidad, veracidad y empatía, planteamos preguntas transformadoras que habilitan a individuos y organizaciones a identificar grietas mentales, generar innovación disruptiva y co-crear conocimientos que trasciendan el consenso cómodo. No encontrarás fórmulas universales, sino un foro para pensar, debatir y compartir ideas donde cada participante se convierte en coautor de nuestra revolución intelectual.',
    },
    en: {
      title: 'The Thinkery',
      text: 'Thinkery is THESHAKHESTUDIUM’s living laboratory of reflections, provocative questions and bite-sized essays that carry forward our brand’s countercultural ethos. Here we challenge inherited beliefs, institutional taboos and official narratives, fostering a collaborative uncovering of hidden realities through participatory processes and constructive dialogue. Anchored by honesty, truthfulness and empathy, we pose transformative questions that empower individuals and organizations to spot cracks in their mental frameworks, spark disruptive innovation and co-create knowledge beyond comfortable consensus. You won’t find one-size-fits-all formulas—instead, you’ll find a space to think, debate and share insights, where every participant becomes a co-author of our intellectual revolution.',
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
        <p className="text-[#FFF9ED] text-lg font-inter leading-relaxed">
          {content[language].text}
        </p>
      </div>
    </section>
  );
};

export default PageIdeas;