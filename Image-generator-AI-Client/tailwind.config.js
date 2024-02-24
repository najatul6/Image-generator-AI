/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-blue":"#1d1c2c",
        "dark-orange":"#ff4e01",
      }
    },
  },
  plugins: [],
}

