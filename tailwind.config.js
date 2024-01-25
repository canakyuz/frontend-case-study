/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'ui': ['Poppins', 'sans-serif'],
        'body': ['Urbanist', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 3px 10px rgb(0,0,0,0.2)',
        'base': '4.0px 8.0px 8.0px rgba(0,0,0,0.38)',
        'card': '0px 0px 0px 1px rgba(0,0,0,0.06),0px 1px 1px -0.5px rgba(0,0,0,0.06),0px 3px 3px -1.5px rgba(0,0,0,0.06), 0px 6px 6px -3px rgba(0,0,0,0.06),0px 12px 12px -6px rgba(0,0,0,0.06),0px 24px 24px -12px rgba(0,0,0,0.06)'
      },
    },
  },
  plugins: [],
};
