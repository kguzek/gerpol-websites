import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
  content: ["./src/app/*.tsx", "./src/components/*/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [tailwindAnimate],
} satisfies Config;
