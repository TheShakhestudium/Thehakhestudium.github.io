import React from 'react';

const LayoutFooter = ({ language = 'es' }) => {
  return (
    <footer className="w-full bg-[#0A0A0A] text-[#B0ACA3] py-8 mt-12 font-inter">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-2">
          THESHAKHESTUDIUM LLC
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Simple SVG for social media icons (placeholders) */}
          <a href="#" className="text-[#B0ACA3] hover:text-[#BD9435] transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="#" className="text-[#B0ACA3] hover:text-[#BD9435] transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-3.309 0-5.984 2.653-5.984 5.931 0 2.883 1.891 5.416 4.767 6.708.202.09.306.29.243.49l-.797 2.55c-.07.224-.007.47.16.63.167.16.41.22.63.16l2.55-.797c.2-.063.4.04.49.243 1.292 2.876 3.825 4.767 6.708 4.767 3.278 0 5.931-2.675 5.931-5.984 0-3.309-2.653-5.984-5.931-5.984zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;