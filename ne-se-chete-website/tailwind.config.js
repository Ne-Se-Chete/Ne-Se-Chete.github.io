/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Regular-3270': ['Regular-3270', 'monospace'],  // after you font, add some fonts separated by commas to handle fallback.
      }
    },
  },
  plugins: [],
}

