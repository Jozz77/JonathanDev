/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxl': '1350px',
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
      'ssm': '420px'
    },
    colors: {
        'Primary':'radial-gradient(50% 50% at 50% 50%, rgba(26, 21, 21, 0.00) 0%, rgba(1, 1, 1, 0.16) 100%), #FFF',
        'Secondary':'#000',
        'WhiteBoldText':'#FFFFFF',
        // 'WhiteNormalText':'#F6F6F6',
        // 'white':'rgba(255, 255, 255, 1)',
        // 'black':' #000000',
        'gray': ' #909090'

    },
    extend: {
      // backgroundImage: {
      //   'about-image': "url('./waves.png)",
      // }
      },
      fontFamily:{
        OpenSans:['Open Sans', 'sans-serif'],
        Montserrat:['Montserrat', 'sans-serif'],
        Raleway:['Raleway', 'sans-serif']
      },
      // maxWidth: {
      //   '3/4': '75%', // Define a custom max-width class
      // },
    },
  plugins: [],
}
