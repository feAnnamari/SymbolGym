/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'digital-seed': '#1AC78D',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'teko': ['Teko'],
        'shoulders': ['Big Shoulders Display'],
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@headlessui/tailwindcss')
  ],
}

