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
        light_grey: "var(--light-grey)",
        blue: "var(--blue)",
        dark_blue: "var(--dark-blue)",
      },
    },
  },
  plugins: [],
}

