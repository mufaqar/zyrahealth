import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        '3xl': '0 2px 11px 0px rgba(160, 152, 211, 0.2)',
      },
      colors: {
        primary: '#7070FF',
        icon: '#B6B9CE',
        title: '#5E5E6F',
        body_text: '#7F7F7F',
        line: '#EAEAF1',
      },
    },
  },
  plugins: [],
};
export default config;
