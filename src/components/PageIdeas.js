import React, { useState } from 'react';

const motivational = {
  es: [
    "Hazte escuchar: comparte tu visión en el Pensadero.",
    "¿Qué pregunta necesitas que el mundo se haga? Escríbela aquí.",
    "Tu reflexión puede iniciar una revolución.",
    "Atrévete a pensar distinto. Publica tu microensayo."
  ],
  en: [
    "Make yourself heard: share your vision in the Thinkery.",
    "What question do you need the world to ask? Write it here.",
    "Your reflection can start a revolution.",
    "Dare to think differently. Publish your micro-essay."
  ]
};

const ideasContent = {
  es: {
    titulo: "Pensadero",
    intro: `Pensadero es el laboratorio vivo de THESHAKHESTUDIUM: un espacio de reflexiones, preguntas provocadoras y microensayos que prolongan el espíritu contracultural de nuestra marca. Aquí cuestionamos convicciones heredadas, tabúes institucionales y relatos oficiales, facilitando el descubrimiento colaborativo de realidades ocultas mediante procesos participativos y diálogo constructivo.

Guiados por nuestros valores de honestidad, veracidad y empatía, planteamos preguntas transformadoras que habilitan a individuos y organizaciones a identificar grietas mentales, generar innovación disruptiva y co-crear conocimientos que trasciendan el consenso cómodo. No encontrarás fórmulas universales, sino un foro para pensar, debatir y compartir ideas donde cada participante se convierte en coautor de nuestra revolución intelectual.`
  },
  en: {
    titulo: "Thinkery",
    intro: `Thinkery is THESHAKHESTUDIUM’s living laboratory of reflections, provocative questions and bite-sized essays that carry forward our brand’s countercultural ethos. Here we challenge inherited beliefs, institutional taboos and official narratives, fostering a collaborative uncovering of hidden realities through participatory processes and constructive dialogue.

Anchored by honesty, truthfulness and empathy, we pose transformative questions that empower individuals and organizations to spot cracks in their mental frameworks, spark disruptive innovation and co-create knowledge beyond comfortable consensus. You won’t find one-size-fits-all formulas—instead, you’ll find a space to think, debate and share insights, where every participant becomes a co-author of our intellectual revolution.`
  }
};

export default function PageIdeas({ language }) {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
  const [phrase, setPhrase] = useState(
    motivational[language][Math.floor(Math.random() * motivational[language].length)]
  );

  const t = ideasContent[language];

  const handlePost = () => {
    if (input.trim()) {
      setPosts([{ text: input, date: new Date() }, ...posts]);
      setInput('');
    }
  };

  const handlePhrase = () => {
    let newPhrase;
    do {
      newPhrase = motivational[language][Math.floor(Math.random() * motivational[language].length)];
    } while (newPhrase === phrase);
    setPhrase(newPhrase);
  };

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto min-h-[70vh]">
      <h2 className="text-4xl font-bold text-gold mb-4 text-center">{t.titulo}</h2>
      <p className="mb-6 text-lg text-[#0A0A0A] text-center whitespace-pre-line">{t.intro}</p>
      <div className="mb-4 text-center text-gold font-semibold">
        {language === 'es'
          ? `Interacciones: ${posts.length}`
          : `Interactions: ${posts.length}`}
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder={language === 'es' ? 'Escribe tu reflexión...' : 'Share your thought...'}
          value={input}
          onChange={e => setInput(e.target.value)}
          className="w-full p-3 rounded-lg text-black mb-2"
        />
        <button
          className="bg-gold text-[#0A0A0A] px-5 py-2 rounded-full font-bold hover:bg-[#a68023] transition"
          onClick={handlePost}
        >
          {language === 'es' ? 'Publicar' : 'Post'}
        </button>
      </div>
      {posts.length > 0 && (
        <div className="space-y-2 mb-6">
          {posts.map((p, idx) => (
            <div key={idx} className="bg-white/10 p-4 rounded-lg">
              <span className="text-[#0A0A0A]">{p.text}</span>
              <div className="text-xs text-gray-400">{p.date.toLocaleString()}</div>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-col items-center mt-8">
        <a
          href="https://twitter.com/intent/tweet?text=Me+sumo+al+Pensadero+de+%23TheShakhestudium%3A+"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#1da1f2] hover:bg-[#0a85d9] text-white px-6 py-3 rounded-full shadow-lg font-semibold text-lg transition transform hover:scale-105"
          onMouseEnter={handlePhrase}
        >
          <svg
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="animate-bounce"
          >
            <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.2 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.59a4.27 4.27 0 0 1-1.94-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54c-.34 0-.67-.02-1-.06A12.13 12.13 0 0 0 7.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/>
          </svg>
          <span>{phrase}</span>
        </a>
      </div>
    </section>
  );
}