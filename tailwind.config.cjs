/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        "pry-clr-0": 'rgb(75, 20, 91)',
        "pry-clr-1": 'rgb(16, 42, 66)',
        "pry-clr-2": 'rgb(180, 52, 92)',
        "pry-clr-3": 'rgb(234, 230, 235)',
        "pry-clr-4": 'rgb(50, 77, 103)'
      },
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif']
      }
    },
  },
  plugins: [],
}