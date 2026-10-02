/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FFF9EF',
          deep: '#F8F0E3',
        },
        maroon: {
          DEFAULT: '#681F2D',
          deep: '#42131E',
        },
        gold: {
          DEFAULT: '#B5965A',
          soft: '#C9AE78',
        },
        brown: '#291C1A',
        rose: '#CFA7A0',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        devanagari: ['"Tiro Devanagari Sanskrit"', '"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        luxe: '0.3em',
      },
      boxShadow: {
        foil: '0 1px 0 rgba(181, 150, 90, 0.4)',
      },
      keyframes: {
        'fade-rise': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-cue': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
      animation: {
        'fade-rise': 'fade-rise 0.9s ease-out both',
        'scroll-cue': 'scroll-cue 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
