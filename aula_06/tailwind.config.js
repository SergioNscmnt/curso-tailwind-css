/** @type {import('tailwindcss').Config} */
const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./components/**/*.{html,js}"
  ],
  theme: {
    // UTILIZADO PARA CRIAR BREAKPOINTS
    // screens:{
    //   'tablet': '640px',
    //   'cel':{'max': '400px'}
    // },
    extend: {
      colors:{
        'new-blue': '#243C5A',
        // ESTENDER AS CORES SEM ALTERAR AS EXISTENTES DENTRO DA BIBLIOTECA
        gray:{
          ...colors.gray,
          '900': '#999'
        }
      },
      spacing: {
        '50': '3em', //aproximadamente 50px -- (result(48px) = base(16) * em(3) )
      }
    },
  },
  plugins: [],
}

