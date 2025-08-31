import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-space-grotesk)"],
      },
      colors: {
        bg: "hsl(var(--bg))",
        fg: "hsl(var(--fg))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        trust: "hsl(var(--trust))",
        card: "hsl(var(--card))",
        outline: "hsl(var(--outline))",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
