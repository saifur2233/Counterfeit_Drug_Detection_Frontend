/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: ["winter", "night"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
