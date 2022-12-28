/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:  {
        inter: ['inter', 'serif'],
      },

      colors: {
        springGreen: {
          50: '#fffddb',
          100: '#d0ceb3',
          200: '#a2a18c',
          300: '#777667',
          400: '#4e4e45',
          500: '#292925',
        },

      }
    },
    
  },
  plugins: [],
}
