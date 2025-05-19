import { type Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"], // Match huyml.co’s clean sans
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "hsl(240, 5%, 85%)",
      },
      transitionTimingFunction: {
        'soft': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;