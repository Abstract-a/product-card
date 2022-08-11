/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      width: {
        small: '376px',
        large: '1440px',
      },

      screens: {
        sm: '576px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      colors: {
        DarkCyan: 'hsl(158, 36%, 37%)',
        Cream: 'hsl(30, 38%, 92%)',
        VeryDarkBlue: 'hsl(212, 21%, 14%)',
        DarkGrayishBlue: 'hsl(228, 12%, 48%)',
        White: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
};
