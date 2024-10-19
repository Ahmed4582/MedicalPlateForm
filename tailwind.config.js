/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["almarai-bold", "sans-serif"],
      },
      backgroundImage: {
        bgDoctor: "url('./src/assets/Img/Mask group.png')",
      },
    },
  },
};
