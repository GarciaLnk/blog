/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background-body)",
        tmain: "var(--text-main)",
        tsecondary: "var(--text-secondary)",
        primary: "var(--primary-color)",
      },
      fontFamily: {
        sans: "var(--font-family-sans)",
        serif: "var(--font-family-serif)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
