/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070d1a",
          900: "#0a1428",
          800: "#101b33",
          700: "#182547",
          600: "#22335c",
        },
        accent: {
          300: "#7cb0ff",
          400: "#5b9bff",
          500: "#3b82f6",
          600: "#2563eb",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
