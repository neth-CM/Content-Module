/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/*.{html,js}",
    "./views/**/*.{html,js}"
  ],
  theme: {
    fontSize:{
      'modal-head': ['1.5rem', '2rem'],
      sm: '0.875rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      'transparent' : 'transparent',
      'modal-overlay': '#00000066',
      'german-yellow': '#FFCF00',
      'german-red': '#DE0000',
      'black': '#000000',
      'white': '#FFFFFF',
      'black-red': '#0A0202',
      'white-yellow': '#FFFDF2',
      'dark-red-2': '#890E07',
      'dark-red-3': '#700A06',
      'dark-red-4': '#550702',
      'dark-red-5': '#9F090A',
      'dark-red-6': '#FD0100',
      'grey-1': '#D9D9D9',
    },
    extend: {},
  },
  plugins: [],
}

