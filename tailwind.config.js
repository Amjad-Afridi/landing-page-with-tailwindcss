/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        brightRed: "rgb(238, 75, 43)",
        brightRedLight: "rgb(238, 75, 59)",
        darkBlue: "rgb(11, 11, 75)",
        veryDarkBlue: "rgb(6, 6, 85)",
        veryPaleRed: "rgb(255, 127, 127)",
        veryLightGrey: "rgb(217, 217, 217)",
      },
    },
  },
  plugins: [],
};
