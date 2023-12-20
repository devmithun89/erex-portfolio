/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        rubik: ["var(--font-rubik)"],
      },
      colors: {
        primary: "#2639ED",
        secondary: "#aaa6c3",
        heading: "#1f1f1f",
        subheading: "#9e9e9e",
        gray: "#565656",
        background: "#ffffff",
        backgroundGray: "#f6f5f5",
        lightGray: "#D3D3D3",
      },
    },
  },
  plugins: [],
};
