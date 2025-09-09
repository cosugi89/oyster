/* npx tailwindcss init -p */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',                 //追加
    './src/**/*.{js,jsx,ts,tsx}',   //追加
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

