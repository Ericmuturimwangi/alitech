/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F6F7",
        cream: "#FAF7EF",
        ink: "#16202B",
        navy: {
          DEFAULT: "#041E42",
          dark: "#03142B",
          light: "#8E9AAA",
        },
        gold: {
          DEFAULT: "#B4872E",
          dark: "#8C6A22",
          light: "#D9AF63",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
