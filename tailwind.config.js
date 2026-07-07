/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        accent: "#3B82F6",
        background: "#0F172A",
        surface: "#1E293B",
        "surface-hover": "#243149",
        border: "#2A3A55",
        text: {
          primary: "#F8FAFC",
          secondary: "#94A3B8",
        },
      },
      fontFamily: {
        display: ["Sora", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,1) 100%)",
        "hero-glow":
          "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.18), rgba(15,23,42,0) 60%)",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 20px 40px -20px rgba(0,0,0,0.5)",
        glow: "0 0 0 1px rgba(59,130,246,0.4), 0 0 24px rgba(37,99,235,0.35)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
