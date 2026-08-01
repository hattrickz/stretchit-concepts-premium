/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1330",
        indigo: {
          DEFAULT: "#242F8F",
          bright: "#4A5CF0",
          deep: "#171E63",
        },
        gold: {
          DEFAULT: "#D9A441",
          soft: "#F0D9A8",
        },
        paper: "#F5F6F8",
        slate: {
          ink: "#383D4D",
          muted: "#6B7080",
        },
        line: "#E2E4EA",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        label: ["Space Grotesk", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
}
