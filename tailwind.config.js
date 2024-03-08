/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rgba-black-85': '#111111',
        'font-white-color': '#FFFFFF',
      },
    },
  },
  plugins: [],
}