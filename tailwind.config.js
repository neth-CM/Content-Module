/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/*.{html,js}",
    "./views/**/*.{html,js}"
  ],
  theme: {
    colors: {
      'german-yellow': '#FFCF00',
      'german-red': '#DE0000',
      'german-black': '#000000',
      'german-white': '#FFFFFF',
      'black-red': '#0A0202',
      'white-yellow': '#FFFDF2',
      'dark-red-2': '#890E07',
      'dark-red-3': '#700A06',
      'dark-red-4': '#550702',
      'dark-red-5': '#9F090A',
      'dark-red-6': '#FD0100',
    },
    extend: {},
  },
  plugins: [],
}

