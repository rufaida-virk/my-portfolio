/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        boho: {
          cream: '#F6EEDD',
          sand: '#EBDDC3',
          terracotta: '#C8663F',
          'terracotta-dark': '#ad532f',
          'terracotta-light': '#dd7e59',
          sage: '#8A9A5B',
          'sage-dark': '#6e7d44',
          'sage-light': '#a6b677',
          mustard: '#D9A441',
          'mustard-dark': '#b5842c',
          rose: '#C98B8B',
          'rose-dark': '#b07070',
          brown: '#3E2A1F',
          'brown-light': '#5d4130',
          'dark-bg': '#2B1D16',
          'dark-surface': '#38261e',
          'dark-card': '#443026',
          'dark-border': '#533c30',
          'dark-text': '#F6EEDD'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        handwriting: ['"Caveat"', '"Dancing Script"', 'cursive'],
        body: ['"Lora"', '"Nunito"', 'serif'],
        sans: ['"Nunito"', 'sans-serif']
      },
      borderRadius: {
        'boho-sm': '16px',
        'boho': '22px',
        'boho-lg': '28px',
        'arch': '160px 160px 24px 24px'
      },
      boxShadow: {
        'boho': '0 10px 30px -10px rgba(62, 42, 31, 0.08), 0 4px 12px -4px rgba(62, 42, 31, 0.04)',
        'boho-hover': '0 20px 35px -12px rgba(200, 102, 63, 0.18), 0 8px 16px -6px rgba(62, 42, 31, 0.08)',
        'boho-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.35)'
      }
    },
  },
  plugins: [],
}
