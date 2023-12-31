import type { Config } from "tailwindcss";
// const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: ["14px", "16px"],
      caption: "14px",
      body: ["16px", "20px"],
      name: ["25px", "27px"],
      headline: ["19px", "20.52px"],
      heading: ["34px", "52.7px"],
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    letterSpacing: {
      wide: "1.26px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "ted-grey": "#7D7D7D",
      },
      margin: {
        "mb-28": "116px",
      },
    },
  },
  plugins: [],
};
export default config;
