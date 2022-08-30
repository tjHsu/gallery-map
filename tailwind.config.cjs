/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Electrolize'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["cupcake", "dark"]
  },
};
