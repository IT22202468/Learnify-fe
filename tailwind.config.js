/** @type {import('tailwindcss').Config} */

import colors, { blue, cyan, sky } from "tailwindcss/colors";

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
      primary: sky,
      secondary: blue,
      tertiary: cyan,
    }
  },
  plugins: [],
}

