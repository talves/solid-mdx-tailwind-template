import { defineConfig } from "vite";
import solid from "solid-start/vite";
import netlify from "solid-start-netlify";

export default defineConfig({
  plugins: [
    {
      ...(await import("@mdx-js/rollup")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
      enforce: "pre",
    },
    solid({
      extensions: [".mdx", ".md", ".tsx"],
      adapter: netlify({ edge: false })
    }),
  ],
});
