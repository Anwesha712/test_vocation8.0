/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1 : '#0b090a',
        bg2 : '#252422',
    },
  },
  fontFamily: {
    font1: ["Elsie Swash Caps", "serif"],
    font2: ["Rubik Dirt", "system-ui"],
    font3: ["Righteous", "sans-serif"],
    font4: ["Pacifico", "cursive"],
    font5: ["Lora", "serif"],
  },
  plugins: [],
}
}