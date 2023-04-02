/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      lightPrimary: "",
      darkPrimary: "#000000",
      darkSecondary: "#0B2447",
      darkTeritary: "#F6F1F1",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [],
};
