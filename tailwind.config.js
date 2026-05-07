/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1e3a8a', // Azul profundo (institucional)
        secondary: '#dc2626', // Rojo acento
        light: '#f8fafc',
        dark: '#0f172a'
      }
    },
  },
  plugins: [],
}
