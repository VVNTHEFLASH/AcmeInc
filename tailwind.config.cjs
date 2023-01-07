/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'header-262': "20.5% 59% 20.5%",
        '50/50': "50% 50%",
        '70/30': "70% 30%"
      },
      height: {
        '80vh': "80vh",
        '85vh': "85vh",
        '90vh': "90vh",
        '95vh': "95vh",
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin')
  ],
}