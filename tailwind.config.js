/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#010203",
      white: "#FCFDF5",
      red: "#F33838",
      grey: "#D9D9D9",
    },
    extend: {
      fontFamily: {
        monoton: ["Monoton", "sans-serif"],
        spacemono: ["Space Mono", "mono"],
      },
    },
  },
  plugins: [],
};
