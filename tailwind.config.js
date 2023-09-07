/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-image': '#252f38',
        'hover-btn': '#7a8999'
      }
    },
  },
  plugins: [],
}

