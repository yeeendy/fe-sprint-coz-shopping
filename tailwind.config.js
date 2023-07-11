/* @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '55': '55px',
        '30': '30px',
        '32': '32px',
        '34': '34px',
        '76':'76px',
        '143': '143px',
        '1170': '1170px',
        "76px": "5,74rem",
        "25px": "1.56rem"
      }
    },
  },
  plugins: [],
}

