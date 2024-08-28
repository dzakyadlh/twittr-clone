/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#010003",
        "secondary-bg": "#121316",
        "border-gray": "#1E1E1E",
        "subtitle-text": "#5E6368",
        "twittr-blue": "#1880E8",
        "likes-pink": "#F91880",
      },
      fontSize: {
        "subtitle-size": "14px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
