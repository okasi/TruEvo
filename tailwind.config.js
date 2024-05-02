/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["var(--font-fredoka)", "Trebuchet MS", "Arial", "sans-serif"],
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFF",
      "black": "#000",
      "brand-primary": "#3cfb52",
      "brand-secondary": "#544cf9",
      "brand-tertiary": "#fa3fa0",
      "grey": "#9e9e9eff",
    },
    borderRadius: {
      none: "0",
      "2xl": "1rem",
      full: "9999px",
    },
    backgroundImage: {
      "gradient-brand":
        "linear-gradient(95.625deg, #DF0677 0%, #FC44A4 17%, #564EFA 37%, #3830E8 55%, #564EFA 70%, #3BF9B5 85%, #32CE97 100%)",
    },
  },
  plugins: [],
};
