import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D32F2F", // Automotive Red
          dark: "#B71C1C",
        },
        secondary: {
          DEFAULT: "#1A237E", // Deep Blue for trust/industry
          dark: "#0D47A1",
        },
      },
    },
  },
  plugins: [],
};
export default config;