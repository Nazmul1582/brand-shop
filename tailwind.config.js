/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: "'Inter', sans-serif",
        Russo_One: "'Russo One', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

