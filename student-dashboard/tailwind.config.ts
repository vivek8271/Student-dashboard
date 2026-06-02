import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {

      animation: {
        shimmer:
          "shimmer 2s linear infinite",
      },

      keyframes: {
        shimmer: {
          "100%": {
            transform:
              "translateX(100%)",
          },
        },
      },

    },
  },

  plugins: [],
};

export default config;