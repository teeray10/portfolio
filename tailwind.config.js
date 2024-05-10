/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        accent: "var(--accent)",
        light: "var(--light)",
        dark: "var(--dark)",
        grey: "var(--grey)",
        blue: "var(--blue)",
      },
    },
  },
  plugins: [],
}

