/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'my-primary': '#3EB075',
      'my-secondary': '#69BF70',
      'my-text': '#0A0A0F',
      'my-bg1': '#FAFCFE',
      'my-bg2': '#F6F8FC',
      'red': '#ff5161',
      'my-p': '#666666',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

