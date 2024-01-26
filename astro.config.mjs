import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import remarkGfm from "remark-gfm";
import remarkSmartypants from "remark-smartypants";
import rehypeExternalLinks from "rehype-external-links";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://garcialnk.com",
  integrations: [mdx(), sitemap(), tailwind(), svelte(), compress()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
        },
      ],
    ],
  },
});
