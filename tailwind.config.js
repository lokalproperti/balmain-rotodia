/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'bg': '#F9F7F4',
        'surface': '#FFFFFF',
        'text-primary': '#1A1816',
        'text-secondary': '#6B6560',
        'text-muted': '#9B9590',
        'accent': '#B8956A',
        'navy': '#23314d',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}