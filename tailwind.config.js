/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#BD9435',
      },
      boxShadow: {
        gold: '0 0 16px #BD9435',
      },
      keyframes: {
        pulseGold: {
          '0%, 100%': { textShadow: '0 0 8px #BD9435' },
          '50%': { textShadow: '0 0 24px #FFD700' },
        },
      },
      animation: {
        'pulse-gold': 'pulseGold 1.2s infinite alternate',
      },
    },
  },
  plugins: [],
};
