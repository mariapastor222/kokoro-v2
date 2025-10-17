import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFDEF",
        sage: "#CDC69A",
        cherry: "#A7292F",
        chocolate: "#290102"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: [],
};

export default config;
