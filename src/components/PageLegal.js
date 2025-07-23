import React, { useEffect, useRef } from 'react';

const PageLegal = ({ language = 'es' }) => {
  const content = {
    es: {
      title: 'Aviso Legal',
      owner: 'Titular del Sitio',
      ownerName: 'The Shakhestudium LLC',
      contact: 'Contacto legal:',
      contactEmail: 'theshakhestudium@theshakhestudium.com',
      section1Title: '1. Objeto',
      section1Text: 'El presente Aviso Legal regula el uso de https://theshakhestudium.com (el “Sitio”) y sus servicios.',
      section2Title: '2. Propiedad Intelectual',
      section2Text: 'Todo el contenido (textos, diseños, logos, imágenes, audio, vídeo, código) pertenece a The Shakhestudium LLC o a terceros que han otorgado autorización por escrito (email o documento firmado). Queda prohibida la reproducción, distribución o transformación sin dicho permiso.',
      section3Title: '3. Uso del Sitio',
      section3Text: 'El usuario se compromete a utilizar el Sitio conforme a la ley y esta normativa. Queda prohibido cualquier uso fraudulento o lesivo de derechos de terceros.',
      section4Title: '4. Exención de Responsabilidad',
      section4Accuracy: 'Exactitud: Se realizan esfuerzos razonables para garantizar la veracidad de la información, pero no se garantizan cero errores.',
      section4Links: 'Enlaces externos: Solo con fines informativos; no implican respaldo ni responsabilidad sobre su contenido.',
      section4Availability: 'Disponibilidad: No garantizamos acceso continuo; eximimos responsabilidad por interrupciones fuera de nuestro control.',
      section5Title: '5. Protección de Datos y Cookies',
      section5Text: 'Consulta nuestra Política de Privacidad en /es/politica-privacidad/ para más información.',
      section6Title: '6. Legislación Aplicable y Jurisdicción',
      section6Text: 'Estos Términos se rigen por la legislación del lugar de registro de The Shakhestudium LLC (Delaware, EE. UU.) o, en su defecto, por la legislación aplicable al usuario. Cualquier disputa se somete a los tribunales competentes de Wilmington, Delaware, EE. UU.',
      section7Title: '7. Modificaciones',
      section7Text: 'Podemos actualizar este Aviso Legal en cualquier momento. La versión vigente y la fecha de “Última actualización” figurarán aquí.',
      lastUpdated: 'Última actualización: 2025-07-XX',
    },
    en: {
      title: 'Legal Notice',
      owner: 'Site Owner',
      ownerName: 'The Shakhestudium LLC',
      contact: 'Contact (legal):',
      contactEmail: 'theshakhestudium@theshakhestudium.com',
      section1Title: '1. Purpose',
      section1Text: 'This Legal Notice governs the use of https://theshakhestudium.com (the “Site”) and all related services.',
      section2Title: '2. Intellectual Property',
      section2Text: 'All content (text, graphics, logos, audio, video, code) is owned by The Shakhestudium LLC or third parties who have granted written permission. Any reproduction, distribution or transformation is prohibited without prior written consent (email or signed document).',
      section3Title: '3. Site Use',
      section3Text: 'You agree to use the Site lawfully and ethically. Fraudulent or harmful use against third-party rights is forbidden.',
      section4Title: '4. Disclaimer of Warranties and Liability',
      section4Accuracy: 'Accuracy: We strive for correct, up-to-date content but make no guarantee of error-free information.',
      section4Links: 'Third-party links: Provided for convenience; we do not endorse and are not liable for their content.',
      section4Availability: 'Availability: We do not guarantee uninterrupted access; we disclaim liability for outages beyond our reasonable control.',
      section5Title: '5. Data & Cookies',
      section5Text: 'Your data rights and cookie policies are detailed in our Privacy Policy at /privacy/.',
      section6Title: '6. Governing Law & Jurisdiction',
      section6Text: 'These Terms are governed by the laws of the jurisdiction where The Shakhestudium LLC is registered (Delaware, USA), or when applicable, by the law of the user’s country. Disputes will be settled in the competent courts of Wilmington, Delaware, USA.',
      section7Title: '7. Amendments',
      section7Text: 'We may update this Legal Notice at any time. The current version and “Last updated” date appear here.',
      lastUpdated: 'Last updated: 2025-07-XX',
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
          <p><strong>{content[language].owner}</strong><br />{content[language].ownerName}</p>
          <p><strong>{content[language].contact}</strong> {content[language].contactEmail}</p>

          <h3 className="text-2xl font-playfair font-semibold text-[#BD9435]">{content[language].section1Title}</h3>
          <p>{content[language].section1Text}</p>

          <h3 className="text-2xl font-playfair font-semibold text-[#BD9435]">{content[language].section2Title}</h3>
          <p>{content[language].section2Text}</p>

          <h3 className="text-2xl font-playfair font-semibold text-[#BD9435]">{content[language].section3Title}</h3>
          <p>{content[language].section3Text}</p>

          <h3 className="text-2xl font-playfair font-semibold text-[#BD9435]">{content[language].section4Title}</h3>
          <p>{content[language].section4Accuracy}</p>
          <p>{content[language].section4Links}</p>
          <p>{content[language].section4Availability}</p>

          <h3 className="text-2xl font-playfair font-semibold text-[#BD9435]">{content[language].section5Title}</h3>
          <p>{content[language].section5Text}</p>

          <h3 className="text-2xl font-playfair font-semibold text-[#BD9435]">{content[language].section6Title}</h3>
          <p>{content[language].section6Text}</p>

          <h3 className="text-2xl font-playfair font-semibold text-[#BD9435]">{content[language].section7Title}</h3>
          <p>{content[language].section7Text}</p>
          <p className="text-sm mt-4">{content[language].lastUpdated}</p>
        </div>
      </div>
    </section>
  );
};

export default PageLegal;