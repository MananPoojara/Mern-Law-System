/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset': 'inset 0 0 0 1px rgba(0, 0, 0, 0), inset 10px 0px 50px rgba(0,0,0,0.5)'
      }, transformOrigin: {
        'left': 'left'
      },
      animation: {
        text: 'text 5s ease infinite',
        slidein300: 'slidein 1s ease 300ms forwards'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '70%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}