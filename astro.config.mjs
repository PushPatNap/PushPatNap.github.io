// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// import pagefind from "astro-pagefind";
// https://astro.build/config
export default defineConfig({
  site: 'https://pushpatnap.github.io',
  build: {
    format: "file",
  },
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx()],
  
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});