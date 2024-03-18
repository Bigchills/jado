/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./jadoo/*.{html,js}"],
  theme: {
    screens: {
      sm:'420px',
      md:'780px',
      lg:'1100px',
      xl:'1440px'

    },
    
    extend: {
      colors:{
        darkOrange:'#DF6951',
        darkBlue:'#181E4B',
        darkBlack:'#212832',
        blueGray:'#5E6282',
        textGray:'#5E6282'
      }

    },
  },
  plugins: [],
}

