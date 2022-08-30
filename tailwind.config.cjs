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
    themes: [{
      mytheme: {
        "primary": "#F6F6F6",
        "secondary": "#BDF2D5",
        "accent": "#7AD9F5",
        "neutral": "#F25F5C",
        "base-100": "#5D13E7",
        "info": "#F5AC93",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      }
    }, "dark"]
  },
};
