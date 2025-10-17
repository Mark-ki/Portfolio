/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*"],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#4F46E5', // Indigo-600 for main accents
        'background-dark': '#0F172A', // slate-900 or darker
        'surface-dark': '#1E293B', // slate-800 for cards/sidebar
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
