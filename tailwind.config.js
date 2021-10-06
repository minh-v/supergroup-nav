const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: "#fbff30",
        black: "#000000",
        green: colors.green,
      },
      rotate: {
        135: "135deg",
      },
      scale: {
        70: ".7",
      },
      scaling: {
        1: ".75rem",
        2: "2rem",
        8: "8rem",
      },
      transitionDuration: {
        0: "0ms",
      },
      translate: {
        3: "3px",
        4: "4px",
        5: "5px",
        6: "-5px",
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
      transitionDuration: ["hover", "focus"],
    },
  },
  plugins: [],
}
