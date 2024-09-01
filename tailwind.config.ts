import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
      colors: {
        primary: "#8330c2",
        "primary-100": "#9e4cdc",
        "primary-200": "#933bd7",
        secondary: "white",
        tertiary: "#fafafa",
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
        "montserrat-500": ["Montserrat-500", "sans-serif"],
        "montserrat-600": ["Montserrat-600", "sans-serif"],

      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleX: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        enterFromLeft: {
          '0%': { left: '-100%' },
          '100%': {left: '0%'},
        },
        exitToRight: {
          '0%': { left: '0%' },
          '100%': { left: '100%' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        scaleX: 'scaleX 1s ease-in-out forwards',
        enterFromLeft: 'enterFromLeft 1s ease-in-out forwards',
        exitToRight: 'exitToRight 1s ease-in-out forwards'
      },
    },
  },
  plugins: [],
};
export default config;
