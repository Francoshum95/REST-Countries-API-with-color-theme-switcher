/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans"],
      },
      screens: {
        'mobile': {'max': '375px'},
        'md': {'max': "768px"},
        'desktop': "1440px"
      },
      colors: {
        "dark-elment": "#2B3945",
        "dark-bg": "#202C37",
        "light-text": "#111517",
        "light-input": "#858585",
        "light-bg": "#FAFAFA",
        "inherit": 'inherit'
      }
    },
  },
  plugins: [],
}
