import React from 'react';

const manifestoContent = {
  es: {
    titulo: "Manifiesto",
    parrafos: [
      "En THESHAKHESTUDIUM promovemos la transformación integral con un enfoque sistemático y analítico: cuestionamos convicciones heredadas, tabúes institucionales y relatos oficiales, y facilitamos el descubrimiento colaborativo de realidades ocultas mediante procesos participativos y diálogo constructivo.",
      "Nuestros valores corporativos —honestidad, veracidad y empatía— guían cada fase del proceso. La honestidad se traduce en transparencia absoluta en metodologías y comunicaciones; la veracidad en un compromiso inquebrantable con la precisión de datos y fuentes; la empatía en la construcción de espacios que integren perspectivas diversas y generen consensos.",
      "En cada episodio, artículo e imagen, THESHAKHESTUDIUM ofrece preguntas transformadoras que habilitan a individuos y organizaciones a identificar grietas en sus sistemas mentales, generar innovación disruptiva y construir narrativas compartidas que trasciendan el consenso cómodo. No proporcionamos fórmulas universales; facilitamos el diálogo crítico y la co-creación de conocimiento.",
      "Así, THESHAKHESTUDIUM se posiciona como un partner estratégico en procesos de cambio profundo, capaz de impulsar transformaciones reales a través del análisis riguroso y el trabajo colaborativo, bajo un compromiso de calidad editorial, académico y de diseño que respalda cada paso de nuestra propuesta."
    ],
    cta: "Atrévete a desafiar tus creencias"
  },
  en: {
    titulo: "Manifesto",
    parrafos: [
      "At THESHAKHESTUDIUM we champion holistic transformation through a systematic and analytical approach: we challenge inherited convictions, institutional taboos and official narratives, and we foster the collaborative discovery of hidden realities through participatory processes and constructive dialogue.",
      "Our corporate values — honesty, truthfulness and empathy — guide every phase of our work. Honesty manifests as full transparency in our methodologies and communications; truthfulness as an unwavering commitment to the accuracy of data and sources; empathy as the creation of spaces that integrate diverse perspectives and build consensus.",
      "In every episode, article and image, THESHAKHESTUDIUM poses transformative questions that empower individuals and organizations to uncover cracks in their mental frameworks, spark disruptive innovation and craft shared narratives that transcend comfortable consensus. We do not offer universal formulas; we facilitate critical dialogue and the co-creation of knowledge.",
      "Thus, THESHAKHESTUDIUM positions itself as a strategic partner in deep-rooted change processes, capable of driving real transformation through rigorous analysis and collaborative work, underpinned by editorial, academic and design excellence at every step of our mission."
    ],
    cta: "Dare to challenge your beliefs"
  }
};

export default function PageManifesto({ language }) {
  const t = manifestoContent[language];

  return (
    <section className="max-w-3xl mx-auto px-4 py-16 pt-24">
      <h2 className="text-4xl font-bold text-gold mb-8 text-center">
        {t.titulo}
      </h2>
      <div className="space-y-6 text-[#0A0A0A] text-lg leading-relaxed">
        {t.parrafos.map((parrafo, idx) => (
          <p key={idx}>{parrafo}</p>
        ))}
        <span className="cta-highlight font-semibold text-lg cursor-pointer transition"
          tabIndex={0}
          onMouseOver={e => e.currentTarget.classList.add('animate-cta')}
          onMouseOut={e => e.currentTarget.classList.remove('animate-cta')}
          onFocus={e => e.currentTarget.classList.add('animate-cta')}
          onBlur={e => e.currentTarget.classList.remove('animate-cta')}
        >
          {t.cta}
        </span>
      </div>
      <style>{`
        .cta-highlight {
          color: #BD9435;
          outline: none;
        }
        .animate-cta {
          text-shadow: 0 0 10px #f7e6b5, 0 0 24px #bd9435;
          animation: cta-pulse 1s infinite alternate;
        }
        @keyframes cta-pulse {
          from { text-shadow: 0 0 8px #f7e6b5, 0 0 24px #bd9435; }
          to   { text-shadow: 0 0 24px #f7e6b5, 0 0 40px #bd9435; letter-spacing: 1.2px; }
        }
      `}</style>
    </section>
  );
}
