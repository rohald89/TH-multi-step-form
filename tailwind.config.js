/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#DEF3F1',
        primary: '#39474D',
        secondary: '#F3F6F9',
        'progress-fg': '#6AD9A3',
        submit: '#6AD9A3',
        'btn-secondary': '#F3F6F9',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
