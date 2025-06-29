/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Cyberpunk color palette
        "cyber-blue": "#00d4ff",
        "cyber-purple": "#8b5cf6",
        "cyber-green": "#00ff88",
        "cyber-pink": "#ff6b6b",
        "cyber-yellow": "#ffd700",
        // Additional cyberpunk colors
        "neon-blue": "#00d4ff",
        "neon-purple": "#8b5cf6",
        "neon-green": "#00ff88",
        "neon-pink": "#ff6b6b",
        "electric-blue": "#0099ff",
        "matrix-green": "#00ff41",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular"],
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "bounce-in": {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 212, 255, 0.6)" },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.4), 0 0 40px rgba(0, 212, 255, 0.2)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(0, 212, 255, 0.8), 0 0 80px rgba(0, 212, 255, 0.4)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "rotate-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100vh)", opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        "particle-float": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-30px) translateX(20px)" },
          "66%": { transform: "translateY(10px) translateX(-20px)" },
        },
        "neon-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
          "75%": { opacity: "1" },
          "85%": { opacity: "0.9" },
        },
        "cyber-glitch": {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        hologram: {
          "0%, 100%": {
            opacity: "1",
            filter: "hue-rotate(0deg)",
          },
          "50%": {
            opacity: "0.8",
            filter: "hue-rotate(90deg)",
          },
        },
        "data-stream": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.33)", opacity: "1" },
          "80%, 100%": { transform: "scale(2.33)", opacity: "0" },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in-down": "fade-in-down 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
        "bounce-in": "bounce-in 0.8s ease-out",
        glow: "glow 2s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "rotate-reverse": "rotate-reverse 15s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "text-shimmer": "text-shimmer 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease-in-out infinite",
        "matrix-rain": "matrix-rain 3s linear infinite",
        "particle-float": "particle-float 4s ease-in-out infinite",
        "neon-flicker": "neon-flicker 2s ease-in-out infinite",
        "cyber-glitch": "cyber-glitch 0.3s ease-in-out infinite",
        hologram: "hologram 4s ease-in-out infinite",
        "data-stream": "data-stream 2s linear infinite",
        "pulse-ring": "pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
        typewriter: "typewriter 3s steps(40, end) 1s 1 normal both",
        blink: "blink 1s infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-cyber": "linear-gradient(135deg, #00d4ff 0%, #8b5cf6 50%, #00ff88 100%)",
        "gradient-neon": "linear-gradient(45deg, #00d4ff, #8b5cf6, #00ff88, #ff6b6b)",
        "gradient-matrix": "linear-gradient(180deg, #001100 0%, #003300 50%, #00ff41 100%)",
        "cyber-grid":
          "linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)",
        holographic: "linear-gradient(45deg, #00d4ff, #8b5cf6, #00ff88, #ff6b6b)",
      },
      backgroundSize: {
        "cyber-grid": "50px 50px",
        holographic: "400% 400%",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "neon-sm": "0 0 10px rgba(0, 212, 255, 0.5)",
        neon: "0 0 20px rgba(0, 212, 255, 0.5)",
        "neon-lg": "0 0 40px rgba(0, 212, 255, 0.5)",
        "neon-purple": "0 0 20px rgba(139, 92, 246, 0.5)",
        "neon-green": "0 0 20px rgba(0, 255, 136, 0.5)",
        cyber: "0 0 30px rgba(0, 212, 255, 0.3), inset 0 0 30px rgba(0, 212, 255, 0.1)",
        hologram: "0 0 50px rgba(0, 212, 255, 0.3), 0 0 100px rgba(139, 92, 246, 0.2)",
      },
      textShadow: {
        neon: "0 0 10px rgba(0, 212, 255, 0.8)",
        "neon-purple": "0 0 10px rgba(139, 92, 246, 0.8)",
        "neon-green": "0 0 10px rgba(0, 255, 136, 0.8)",
      },
      screens: {
        "3xl": "1600px",
        "4xl": "1920px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Custom plugin for text shadows
    ({ addUtilities }) => {
      const newUtilities = {
        ".text-shadow-neon": {
          textShadow: "0 0 10px rgba(0, 212, 255, 0.8)",
        },
        ".text-shadow-neon-purple": {
          textShadow: "0 0 10px rgba(139, 92, 246, 0.8)",
        },
        ".text-shadow-neon-green": {
          textShadow: "0 0 10px rgba(0, 255, 136, 0.8)",
        },
        ".text-shadow-glow": {
          textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
