import React from 'react';

export default function LayoutFooter({ language, onOpenModal }) {
  return (
    <footer className="bg-[#0A0A0A] text-gray-400 py-8 px-6 flex flex-col md:flex-row items-center justify-between text-sm">
      <div>
        © {new Date().getFullYear()} TheShakhestudium. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="https://twitter.com/theshakhestud" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          {/* Twitter SVG */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.2 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.59a4.27 4.27 0 0 1-1.94-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54c-.34 0-.67-.02-1-.06A12.13 12.13 0 0 0 7.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg>
        </a>
        <a href="https://facebook.com/theshakhestudium" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          {/* Facebook SVG */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0"/></svg>
        </a>
        <a href="https://youtube.com/@theshakhestudium" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          {/* YouTube SVG */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.11-2.11C19.21 3.5 12 3.5 12 3.5s-7.21 0-9.388.576a2.994 2.994 0 0 0-2.11 2.11C0 8.364 0 12 0 12s0 3.636.502 5.814a2.994 2.994 0 0 0 2.11 2.11C4.79 20.5 12 20.5 12 20.5s7.21 0 9.388-.576a2.994 2.994 0 0 0 2.11-2.11C24 15.636 24 12 24 12s0-3.636-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z"/></svg>
        </a>
        <a href="https://tiktok.com/@theshakhestudium" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          {/* TikTok SVG */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12.004 2.004h3.996v12.004c0 3.308-2.692 6-6 6s-6-2.692-6-6c0-3.308 2.692-6 6-6 .552 0 1 .448 1 1s-.448 1-1 1c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4V4.004h-1.996V2.004z"/></svg>
        </a>
        <a href="https://instagram.com/theshakhestudium" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          {/* Instagram SVG */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.059-1.281.32-2.393 1.301-3.374.981-.981 2.093-1.242 3.374-1.301C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.392 3.678 1.373c-.981.981-1.242 2.093-1.301 3.374C2.013 5.668 2 6.078 2 12c0 5.922.013 6.332.072 7.613.059 1.281.32 2.393 1.301 3.374.981.981 2.093 1.242 3.374 1.301C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.32 3.374-1.301.981-.981 1.242-2.093 1.301-3.374.059-1.281.072-1.691.072-7.613 0-5.922-.013-6.332-.072-7.613-.059-1.281-.32-2.393-1.301-3.374-.981-.981-2.093-1.242-3.374-1.301C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
        </a>
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <button onClick={() => onOpenModal('legal')} className="hover:text-gold underline">Legal</button>
        <button onClick={() => onOpenModal('privacy')} className="hover:text-gold underline">Privacidad</button>
      </div>
      <div className="flex justify-center gap-6 mt-8">
        <a href="https://www.instagram.com/theshakhestudium/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="w-7 h-7 hover:scale-110 transition" />
        </a>
        <a href="https://x.com/TheShakhestud" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X" className="w-7 h-7 hover:scale-110 transition" />
        </a>
        <a href="https://www.tiktok.com/@theshakhestudium" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg" alt="TikTok" className="w-7 h-7 hover:scale-110 transition" />
        </a>
        <a href="https://www.youtube.com/@TheShakhestudium" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" className="w-7 h-7 hover:scale-110 transition" />
        </a>
        <a href="https://open.spotify.com/show/4fGi4sc2RosXTqjvgadOCs" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg" alt="Spotify" className="w-7 h-7 hover:scale-110 transition" />
        </a>
      </div>
    </footer>
  );
}