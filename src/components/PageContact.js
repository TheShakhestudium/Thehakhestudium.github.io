import React, { useState, useEffect, useRef } from 'react';

const content = {
  es: {
    titulo: "Contacto",
    intro: "¿Tienes una propuesta, pregunta o quieres colaborar? Escríbenos y te responderemos pronto.",
    nombre: "Nombre",
    email: "Correo electrónico",
    mensaje: "Mensaje",
    enviar: "Enviar"
  },
  en: {
    titulo: "Contact",
    intro: "Do you have a proposal, question, or want to collaborate? Write to us and we’ll get back to you soon.",
    nombre: "Name",
    email: "Email",
    mensaje: "Message",
    enviar: "Send"
  }
};

export default function PageContact({ language }) {
  const t = content[language];
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [sent, setSent] = useState(false);

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

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 text-center max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-gold mb-6">{t.titulo}</h2>
      <p className="max-w-2xl mx-auto text-lg text-[#0A0A0A] mb-8">{t.intro}</p>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          name="nombre"
          placeholder={t.nombre}
          value={form.nombre}
          onChange={handleChange}
          required
          className="w-full p-3 rounded border border-gold text-[#0A0A0A]"
        />
        <input
          type="email"
          name="email"
          placeholder={t.email}
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded border border-gold text-[#0A0A0A]"
        />
        <textarea
          name="mensaje"
          placeholder={t.mensaje}
          value={form.mensaje}
          onChange={handleChange}
          required
          className="w-full p-3 rounded border border-gold text-[#0A0A0A] min-h-[120px]"
        />
        <button
          type="submit"
          className="px-6 py-2 rounded font-bold bg-gold text-white shadow-gold hover:bg-[#FFD700] transition"
        >
          {t.enviar}
        </button>
        {sent && (
          <div className="text-green-600 font-semibold mt-2">
            {language === 'es' ? '¡Mensaje enviado!' : 'Message sent!'}
          </div>
        )}
      </form>
    </section>
  );
}