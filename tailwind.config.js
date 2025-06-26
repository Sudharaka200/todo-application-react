/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // 👈 must include all source files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config; // 👈 Use this instead of module.exports
