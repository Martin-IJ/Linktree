import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
        default: {
          DEFAULT: "#633CFF",
          light: "#BEADFF",
          extraLight: "#EFEBFF",
        },
        primary: {
          DEFAULT: "#333333",
          light: "#737373",
          extraLight: "#D9D9D9",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          light: "#FAFAFA",
        },
        destructive: "#FF3939",
      },
    },
  },
  plugins: [],
};
export default config;
