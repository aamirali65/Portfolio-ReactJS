// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#171513'
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
