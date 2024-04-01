import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {


brand: {
  400: "#787C90",
  DEFAULT: "#262626",
}
      }
     
    },
    fontFamily: {
      sans: ['var(--font-segoe)', 'Helvetica', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
