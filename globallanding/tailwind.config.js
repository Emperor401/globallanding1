/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
      fontSize: {
        base: ['15px', { lineHeight: '1.6', letterSpacing: '-0.2px' }],
        lg: ['24px', { lineHeight: '1.4', letterSpacing: '-0.2px' }],
      },
      letterSpacing: {
        tight: '-0.2px',
      },
      colors: {
        dark: {
          DEFAULT: '#0A0A0A',
          card: '#111111',
          border: '#1F1F1F',
          muted: '#2A2A2A',
        },
        light: {
          DEFAULT: '#FFFFFF',
          muted: '#A0A0A0',
          dim: '#6B6B6B',
        },
      },
    },
  },
  plugins: [],
}
