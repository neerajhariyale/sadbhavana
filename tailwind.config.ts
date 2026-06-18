import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Royal-blue brand scale, matched to the Sadbhavana Educators logo.
        brand: {
          50: "#EEF4FB",
          100: "#D5E3F5",
          200: "#AEC7EA",
          300: "#7FA5DA",
          400: "#4F80C6",
          500: "#2A5FA8",
          600: "#1A4C8C",
          700: "#143C6E",
          800: "#0A2038",
          900: "#0B2240",
        },
        // Warm orange accent (logo leaves + wordmark).
        accent: {
          400: "#F9A23B",
          500: "#F5821F",
          600: "#D96D12",
        },
        ink: "#0F2C52",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(12,74,110,0.04), 0 8px 24px rgba(12,74,110,0.06)",
        card: "0 1px 2px rgba(12,74,110,0.05), 0 12px 32px rgba(12,74,110,0.08)",
        glow: "0 20px 60px -15px rgba(14,165,233,0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
