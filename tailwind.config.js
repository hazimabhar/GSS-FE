/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/html/utils/withMT";

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'landing-background': "url('/landing.png')",
      }
    }
  },
  plugins: []
});
