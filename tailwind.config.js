/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Work Sans", "sans-serif"],
      },
      colors: {
        primary: "#009193",
        secondary: "#b2cbe3",
        text: {
          primary: "#292E3D",
          secondary: "#E2E2E2",
          muted: "#979797",
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
