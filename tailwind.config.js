/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          100: '#f8f8f8',
        },
        dark: {
          400: '#3a3a3a',
          500: '#232223',
          600: '#202020',
          700: '#2a2a2a',
          800: '#0d1117',
          900: '#010409',
        },
      },
    },
    boxShadow: {
      sm: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      xl: 'rgba(0, 0, 0, 0.4) 0px 8px 24px',
    },
  },
  plugins: [],
}
