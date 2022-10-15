/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        gray_900: '#121214',
        gray_800: '#202024',
        gray_400: '#7c7c8a',
        gray_200: '#c4c4c4',
        gray_100: '#e1e1e6',

        cyan_500: '#81d8f7',
        cyan_300: '#c4e4c0',
        cyan_100: '#B5e2f2',

        red1: '#ff0044',
      },
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32,
      },
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
}
