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
        lightYellow: {
          lightest: '#FFFFE6', 
          light: '#FFFFE3',
          DEFAULT: '#FFFFE0',
          dark: '#E5E5C9',
          darkest: '#CCCCB3',
        },
        myTeal:  {
          lightest: '#B2D8D8', 
          light: '#66B2B2',
          DEFAULT: '#008080',
          dark: '#006666',
          darkest: '#004C4C',
        },

      }
    },
    
  },
  plugins: [],
}
