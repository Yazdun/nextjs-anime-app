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
          100: '#f5f5ff',
        },
        dark: {
          400: '#3a3a3a',
          500: '#232223',
          600: '#202020',
          700: '#2a2a2a',
          800: '#202020',
          900: '#0f0f0f',
        },
      },
    },
  },
  plugins: [],
}
