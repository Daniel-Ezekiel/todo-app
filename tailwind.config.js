/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    fontSize: {
      sm: "1.4rem",
      base: "1.5rem",
      xl: "1.8rem",
      "2xl": "3.6rem",
    },

    spacing: {
      1: "0.5rem",
      2: "1rem",
      3: "1.5rem",
      4: "2rem",
      5: "2.5rem",
      6: "3rem",
      7: "3.5rem",
      8: "4rem",
      9: "4.5rem",
      10: "5rem",
    },

    borderWidth: {
      DEFAULT: "0.1rem",
      0: "0",
      2: "0.2rem",
      3: "0.3rem",
      4: "0.4rem",
      5: "0.5rem",
    },

    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },

    colors: {
      red: "#EB5757",
      blue: "#2F80ED",
      dark: "#333",
      black: "#000",
      gray: "#bdbdbd",
      "dark-gray": "#828282",
      white: "#fff",
    },
  },
  plugins: [],
};

