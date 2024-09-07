/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    extend: {
      width: {
        '1/7': '45%',
        '1/8': '24%',
        '1/5':'32%',
      },

      fontFamily: {
        dosis: ["dosis", "sans-serif"],
      },
      colors:{
      'primary':'#01ECFF',
      'secondary':'#1F232E',
      'secondary-light':'#313743',
      },
    },
  },
  plugins: [],
}