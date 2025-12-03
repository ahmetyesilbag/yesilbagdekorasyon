/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        wood: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8ddc8',
          300: '#d4c4a8',
          400: '#b8a585',
          500: '#9d8a68',
          600: '#8b7456',
          700: '#72604a',
          800: '#5d4f3e',
          900: '#4c4134',
        }
      },
    },
  },
  plugins: [],
}

