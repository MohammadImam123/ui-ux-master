/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Kanit: ['Kanit', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        HeroBg: "url('/hero-bg.jpg')",
        ContactBG: "url('/Frame 1.png')",
      },
    },
    container: {
      padding: '1rem',
      center: true,
    },
  },
  plugins: [],
};
