/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1980px'
    },
    extend: {
      colors: {
        "crown":"#6E1E36",
        "WhiteRock":"#ECE3D4",
        "roses":"#670B36",
        "biscay":"#1A3D67",
        "vodoo":"#543D61",
        "rhino":"#2E3458"
      },
      rotate: {
        '20': '20deg',
      },
      content:{
        'food': "url('/src/assets/food.svg')",
      }
    },
  },
  daisyui: {
    themes: false,
    darkTheme:false
  },
  plugins: [require("daisyui")],
}

