/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImG: 'url("/src/images/bg-desktop.svg")',
      },
      colors: {
        Violet: "hsl(257, 40%, 49%)",
        SoftMagenta: "hsl(300, 69%, 71%)",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        poppins: "['Poppins', 'sans-serif']",
      },
    },
  },
  plugins: [],
}
