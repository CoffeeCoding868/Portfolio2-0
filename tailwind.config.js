// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Correctement séparé par une virgule
    "./src/index.css",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#022200",
        secondary: "#E7E900",
        accent: "#F2EBD7",
        highlight: "#D6CFEE",
      },
    },
  },
  plugins: [],
};
