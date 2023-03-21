/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      green: colors.green,
      blue: colors.blue,
      lime: colors.lime,
      white: colors.white,
    },
  },
  plugins: [],
}
