/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          '600': '#2F855A',
          // Add other shades if needed
        },
      },
    },
  },
  plugins: [],
}