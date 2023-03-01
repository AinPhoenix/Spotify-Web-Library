/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0303",
        background: {
          dark: "#010000",
        },
        lightgray: "#9f9f9f",
        darkgray: "#242224",
      },
    },
  },
  plugins: [],
};
