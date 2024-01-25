/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#151515',
        'secondary' : '#E8E8E8',
        'my-gray' : '#737373',
        'my-orange' : '#FF3811',
        'my-green' : '#29B170',
        'my-bg' : '#F3F3F3',
      },
    },
  },
  plugins: [require("daisyui")],
}

