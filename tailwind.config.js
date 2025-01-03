/** @type {import('tailwindcss').Config} */

import colors, { blue, cyan, emerald } from "tailwindcss/colors";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.jsx",
    "./src/pages/*.jsx",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: emerald,
      secondary: blue,
      tertiary: cyan,
    }
  },
  plugins: [],
}

