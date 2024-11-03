/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['"Josefin Sans"', 'sans-serif'],
        'saira': ['"Saira Condensed"', 'sans-serif'],
        'space': ['"Space Grotesk"', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif']
      },
    },
  },
  variants: {},
  plugins: [],
}

