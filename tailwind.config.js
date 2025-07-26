/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2md": "900px",
        xs: "480px",
        "3xl": "1800px",
      },
      fontFamily: {
        sans: ["Gotham-Regular"],
        medium: ["Gotham-Medium"],
        bold: ["Gotham-Bold"],
      },
    },
  },
  plugins: [],
};
