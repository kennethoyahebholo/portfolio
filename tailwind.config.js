/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{tsx,ts,jsx,js}',
    './components/**/*.{tsx,ts,jsx,js}',
    './app/**/*.{tsx,ts,jsx,js}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#4338CA',
        'accent-light': '#5B7FFF',
        'base-bg': '#07090f',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          'var(--font-inter)',
          'sans-serif',
        ],
      },
      keyframes: {
        orbMove1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(80px, -60px) scale(1.08)' },
          '66%': { transform: 'translate(-40px, 40px) scale(0.95)' },
        },
        orbMove2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-60px, 70px) scale(0.92)' },
          '66%': { transform: 'translate(70px, -40px) scale(1.12)' },
        },
        orbMove3: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-50px, -55px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'orb-1': 'orbMove1 18s ease-in-out infinite',
        'orb-2': 'orbMove2 22s ease-in-out infinite',
        'orb-3': 'orbMove3 16s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
