/* @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 5px 1px rgba(0, 0, 0, 0.1)'
      },
      borderWidth: {
        '18': '18px',
      },
      fontFamily: {
        inter: ["Inter"]
      },
      fontSize: {
        '32px': '32px'
      },
      spacing: {
        '55': '55px',
        '18': '18px',
        '30': '30px',
        '32': '32px',
        '34': '34px',
        '50': '50px',
        '58': '58px',
        '62': '62px',
        '76':'76px',
        '143': '143px',
        '150': '150px',
        '190': '190px',
        '200': '200px',
        '210': '210px',
        '224': '224px',
        '264': '264px',
        '1170': '1170px',
        "76px": "5,74rem",
        "25px": "1.56rem"
      },
      colors: {
        'footer-color': '#888888',
        'dc-color': '#452CDD',
        'unfill': '#DFDFDF',
        'fill': '#FFD361'
      }
    },
  },
  plugins: [],
}

