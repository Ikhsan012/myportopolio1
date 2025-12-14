/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // <--- INI YANG PENTING
  ],
theme: {
  extend: {
    keyframes: {
      textShimmer: {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center'
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center'
        }
      }
    },
    animation: {
      'text-shimmer': 'textShimmer 3s ease infinite',
    }
  }
},
  plugins: [],
}