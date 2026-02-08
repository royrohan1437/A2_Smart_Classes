/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0ecff',
          200: '#c0d9ff',
          300: '#a0c6ff',
          400: '#80b3ff',
          500: '#1e3a8a',
          600: '#1e40af',
          700: '#1e3a8a',
          800: '#1a2a5e',
          900: '#0f1a3c',
        },
        accent: {
          50: '#fffbf0',
          100: '#fef3e0',
          200: '#fde7c1',
          300: '#fbdba2',
          400: '#facf83',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
