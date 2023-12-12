import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100vw", //width to 100% of viewport for the tailwind typography (prose) plugin
          },
        },
      },
      screens: { "4xl": "2559px", "3xl": "1919px" },
      padding: {
        "128": "48rem",
        "112": "36rem",
      },
      backgroundImage: {
        "action-pattern": "url('/assets/xyz.jpg')",
        "navigation-pattern": "url('/assets/xyz.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
