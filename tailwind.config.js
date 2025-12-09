/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#11d452",
        "background-light": "#f6f8f6",
        "background-dark": "#102216",
        "text-light": "#0d1b12",
        "text-dark": "#e7f3eb",
        "card-light": "#ffffff",
        "card-dark": "#1a2c20",
        "border-light": "#e7f3eb",
        "border-dark": "#2c4033",
        "subtle-light": "#4c9a66",
        "subtle-dark": "#a3c7af"
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
