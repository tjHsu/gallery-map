/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rambla'],
      },
    },
    fontSize: {
      'xs': '.875rem',
      'sm': '1rem',
      'base': '1.125rem',
      'lg': '1.25rem',
      'xl': '1.5rem',
      '2xl': '1.875rem',
      '3xl': '2.25rem',
      '4xl': '3rem',
      '5xl': '3.75rem',
      '6xl': '4.5rem'
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#2C272E",
        "secondary": "#753188",
        "accent": "#9AE66E",
        "neutral": "#F25F5C",
        "base-100": "#E59934",
        "info": "#F5AC93",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      }
    }]
  },
};
