/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'extreme': '#1e2528',
        'hot': '#0080e2',
        'spicy': '#0EA2F6',
        'mild': '#f7f7f7',
        'sss': '#283136',
      }
      ,fontFamily: {
        barlow: "'Barlow', sans-serif",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
