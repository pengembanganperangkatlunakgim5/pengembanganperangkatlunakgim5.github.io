/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./services.html", "./script.js"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-hero-patterns")],
};
