/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables class-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure paths are correct
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
