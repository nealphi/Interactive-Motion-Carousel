/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "rgb(107, 157, 172)",
        darkBlue: "rgb(91, 135, 148)",
      },
    },
  },
  plugins: [],
}
