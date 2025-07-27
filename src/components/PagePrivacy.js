import React, { useEffect, useRef } from 'react';

export default function PagePrivacy({ language }) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString(language === 'es' ? 'es-MX' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const content = {
    es: {
      title: 'Política de Privacidad',
      controller: 'Responsable del Tratamiento',
      controllerName: 'The Shakhestudium LLC',
      contact: 'Contacto de datos:',
      contactEmail: 'theshakhestudium@theshakhestudium.com',
      section1Title: '1. Bases Legales',
      section1Text: 'Tratamos datos conforme a GDPR Art.6.1(a) (consentimiento), ejecución de contrato e interés legítimo. CCPA “Right to Opt-Out” donde aplique.',
      section2Title: '2. Datos Recabados y Dónde se Almacenan',
      section2Forms: 'Formularios: Formspree (servidores EE. UU./UE)',
      section2Newsletter: 'Newsletter: MailerLite o Mailchimp',
      section2Analytics: 'Analítica web: Google Analytics (IP anonimizada)',
      section2Logs: 'Logs de servidor: GitHub Pages (sin BD propia)',
      section3Title: '3. Cookies y Seguimiento',
      section3Necessary: 'Necesarias para funcionamiento',
      section3Performance: 'Rendimiento (analítica anon.)',
      section3Functional: 'Funcionales (preferencias)',
      section4Title: '4. Conservación',
      section4Messages: 'Mensajes: 12 meses',
      section4Subscribers: 'Suscriptores: hasta revocación de consentimiento',
      section4Analytics: 'Analítica: 24 meses',
      section5Title: '5. Transferencias Internacionales',
      section5Text: 'Se usan cláusulas tipo UE o Privacy Shield. No vendemos datos personales.',
      section6Title: '6. Derechos ARCO / GDPR / CCPA',
      section6Text: 'Derechos de acceso, rectificación, supresión, portabilidad, limitación, oposición y CCPA (conocer, eliminar, optar-fuera de venta).',
      section6Request: 'Solicítalos a theshakhestudium@theshakhestudium.com.',
      section7Title: '7. Menores',
      section7Text: 'No recabamos datos de menores de 16 años; si ocurre, se eliminan de inmediato.',
      section8Title: '8. Seguridad',
      section8Text: 'HTTPS/TLS, copias de seguridad, controles de acceso y formación interna.',
      section9Title: '9. Actualizaciones',
      section9Text: 'Podemos actualizar esta política. La versión vigente y la fecha aparecerán aquí.',
    },
    en: {
      title: 'Privacy Policy',
      controller: 'Data Controller',
      controllerName: 'The Shakhestudium LLC',
      contact: 'Data questions:',
      contactEmail: 'theshakhestudium@theshakhestudium.com',
      section1Title: '1. Legal Bases',
      section1Text: 'We process personal data under GDPR Art.6.1(a) (consent), contract performance, and legitimate interest. CCPA “Right to Opt-Out” applies where relevant.',
      section2Title: '2. What We Collect & Where It’s Stored',
      section2Forms: 'Contact forms: Formspree (US/EU servers)',
      section2Newsletter: 'Newsletter subscribers: MailerLite or Mailchimp',
      section2Analytics: 'Web analytics: Google Analytics (IP anonymized)',
      section2Logs: 'Server logs: GitHub Pages (no custom database)',
      section2Access: 'Data is accessed only to respond to inquiries, send opted-in communications, or improve the Site.',
      section3Title: '3. Cookies & Tracking',
      section3Necessary: 'Necessary cookies for Site function',
      section3Performance: 'Performance cookies (anonymized analytics)',
      section3Functional: 'Functional cookies for preferences (language)',
      section4Title: '4. Retention',
      section4Messages: 'Contact messages: 12 months',
      section4Subscribers: 'Subscriber data: until consent revoked',
      section4Analytics: 'Analytics data: up to 24 months',
      section5Title: '5. International Transfers',
      section5Text: 'Any transfers outside the EEA rely on EU Standard Contractual Clauses or Privacy Shield frameworks. No sales of personal data occur.',
      section6Title: '6. Your Rights (GDPR / CCPA)',
      section6Text: 'You may exercise: access, rectification, deletion, portability, restriction, objection (GDPR Art.15-21); and CCPA rights to know, delete, opt-out of sale.',
      section6Request: 'Make a request by emailing theshakhestudium@theshakhestudium.com.',
      section7Title: '7. Children',
      section7Text: 'We do not knowingly collect data from minors under 16. If discovered, we delete it immediately.',
      section8Title: '8. Security',
      section8Text: 'We implement HTTPS/TLS, backups, access controls, and staff training.',
      section9Title: '9. Updates',
      section9Text: 'We may modify this policy. The current version and “Last updated” date appear here.',
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
    <section className="max-w-3xl mx-auto px-4 py-16 pt-24">
      <h2 className="text-4xl font-bold text-gold mb-8 text-center">
        {content[language].title}
      </h2>
      <div className="space-y-6 text-[#0A0A0A] text-lg leading-relaxed">
        <p><strong>{content[language].controller}</strong><br />{content[language].controllerName}</p>
        <p><strong>{content[language].contact}</strong> {content[language].contactEmail}</p>

        <h3 className="text-2xl font-playfair font-semibold text-[#BD9435]">{content[language].section1Title}</h3>
        <p>{content[language].section1Text}</p>

        <h3 className="text-2xl font-playfair font-semibold text-[#BD9435]">{content[language].section2Title}</h3>
        <p>{content[language].section2Forms}</p>
        <p>{content[language].section2Newsletter}</p>
        <p>{content[language].section2Analytics}</p>
        <p>{content[language].section2Logs}</p>
        {language === 'en' && <p>{content[language].section2Access}</p>}

        <h3 className="text-2xl font-playfair font-semibold text-[#BD9435]">{content[language].section3Title}</h3>
        <p>{content[language].section3Necessary}</p>
        <p>{content[language].section3Performance}</p>
        <p>{content[language].section3Functional}</p>

        <h3 className="text-2xl font-playfair font-semibold text-[#BD9435]">{content[language].section4Title}</h3>
        <p>{content[language].section4Messages}</p>
        <p>{content[language].section4Subscribers}</p>
        <p>{content[language].section4Analytics}</p>

        <h3 className="text-2xl font-playfair font-semibold text-[#BD9435]">{content[language].section5Title}</h3>
        <p>{content[language].section5Text}</p>

        <h3 className="text-2xl font-playfair font-semibold text-[#BD9435]">{content[language].section6Title}</h3>
        <p>{content[language].section6Text}</p>
        <p>{content[language].section6Request}</p>

        <h3 className="text-2xl font-playfair font-semibold text-[#BD9435]">{content[language].section7Title}</h3>
        <p>{content[language].section7Text}</p>

        <h3 className="text-2xl font-playfair font-semibold text-[#BD9435]">{content[language].section8Title}</h3>
        <p>{content[language].section8Text}</p>

        <h3 className="text-2xl font-playfair font-semibold text-[#BD9435]">{content[language].section9Title}</h3>
        <p>{content[language].section9Text}</p>
        <p className="text-sm mt-4">{content[language].lastUpdated}</p>
      </div>
      <div className="text-sm text-gray-500 mt-8">
        {language === 'es'
          ? `Última actualización: ${formattedDate}`
          : `Last updated: ${formattedDate}`}
      </div>
    </section>
  );
};