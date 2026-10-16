import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          dark: "#1C2526",
          slate: "#233133",
          charcoal: "#162021",
          cream: "#FAF8F5",
          sand: "#D8CEBF",
          lightSand: "#EFEBE3",
          sage: "#5E8A85",
          sageDark: "#486F6B",
          border: "#E2DDD5",
          mutedText: "#4A5859",
        },
      },
      fontFamily: {
        serif: ["'beaufort-pro'", "'Cormorant Infant'", "Georgia", "serif"],
        sans: ["'Mulish'", "'Muli'", "system-ui", "sans-serif"],
        script: ["'PrintedMoments'", "cursive", "serif"],
      },
      letterSpacing: {
        widest: "0.15em",
        wider: "0.08em",
      },
      maxWidth: {
        site: "1440px",
        wide: "1800px",
      },
    },
  },
  plugins: [],
} satisfies Config;
