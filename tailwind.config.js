/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        primary: "0 0px 5px rgba(193, 61, 61, 0.5)",
      },
    },
  },
  plugins: [],
};
