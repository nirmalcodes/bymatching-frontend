/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        looper: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        moveDown: {
          "80%": { opacity: 0.5 },
          "100%": {
            transform: "translateY(1.75rem)",
            opacity: 0,
          },
        },
      },
      animation: {
        "logo-looper": "looper 30s linear infinite",
        "move-down": "moveDown 2s infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwind-scrollbar-hide"),
  ],
};
