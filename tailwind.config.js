/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 6px 14px 7px rgba(0,0,0,0.1);',
      },
      width:{
        '14p': '14px;'
      }
    },
  },
  plugins: [],
}


