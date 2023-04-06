/** @type {import('tailwindcss').Config} */

// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // green: colors.green,
      // blue: colors.blue,
      // lime: colors.lime,
      // white: colors.white,
      'lavender': '#E6E6FA',
      'teal': '#00a0a0',
      'palegray': '#f6f6f6',
      'mediumblue': '#357891',
      'darkgray': '#333333',
      'lightblue': '#c7d7e1',
      'mediumgray': '#a9a9a9',
      'othergray': '#666666',
      'paleorange': '#ffc09f',
      'brightyelloworange': '#FFC107',
    },
  },  
  plugins: [],
}
