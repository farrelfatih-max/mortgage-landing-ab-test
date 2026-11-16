import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ancol: {
          blue: '#0055B8',
          dark: '#003A80',
          light: '#E6F0FA',
          sky: '#0284C7',
          accent: '#FF7A00',
          yellow: '#FFB800',
          cream: '#FFF9F2'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    }
  },
  plugins: [
    forms,
    containerQueries,
  ],
}
