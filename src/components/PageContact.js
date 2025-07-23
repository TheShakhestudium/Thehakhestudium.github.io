import React, { useState, useEffect, useRef } from 'react';

const PageContact = ({ language = 'es' }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(language === 'es' ? 'Mensaje enviado con éxito!' : 'Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
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
          {language === 'es' ? 'Contacto / Colabora' : 'Contact / Collaborate'}
        </h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-[#B0ACA3] text-lg font-inter font-medium mb-2">
              {language === 'es' ? 'Nombre:' : 'Name:'}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#B0ACA3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BD9435] transition duration-300 bg-[#0A0A0A] text-[#FFF9ED] font-inter"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[#B0ACA3] text-lg font-inter font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#B0ACA3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BD9435] transition duration-300 bg-[#0A0A0A] text-[#FFF9ED] font-inter"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-[#B0ACA3] text-lg font-inter font-medium mb-2">
              {language === 'es' ? 'Mensaje:' : 'Message:'}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 border border-[#B0ACA3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BD9435] transition duration-300 resize-none bg-[#0A0A0A] text-[#FFF9ED] font-inter"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#BD9435] text-[#FFF9ED] py-3 rounded-lg font-inter font-medium text-lg hover:bg-[#C82330] transition-colors duration-300 shadow-lg"
          >
            {language === 'es' ? 'Enviar Mensaje' : 'Send Message'}
          </button>
        </form>
        <div className="text-center mt-8">
          <p className="text-[#B0ACA3] font-inter">
            {language === 'es' ? 'También puedes encontrarnos en:' : 'You can also find us on:'}
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-[#B0ACA3] hover:text-[#BD9435] transition-colors duration-300">
              {/* Simple SVG for social media icon (placeholder) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="text-[#B0ACA3] hover:text-[#BD9435] transition-colors duration-300">
              {/* Simple SVG for social media icon (placeholder) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-3.309 0-5.984 2.653-5.984 5.931 0 2.883 1.891 5.416 4.767 6.708.202.09.306.29.243.49l-.797 2.55c-.07.224-.007.47.16.63.167.16.41.22.63.16l2.55-.797c.2-.063.4.04.49.243 1.292 2.876 3.825 4.767 6.708 4.767 3.278 0 5.931-2.675 5.931-5.984 0-3.309-2.653-5.984-5.931-5.984zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContact;