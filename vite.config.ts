import solid from "solid-start/vite";
import { defineConfig } from "vite";
import staticAdapter from "solid-start-static";

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
      // ssr: false,
      extensions: [".mdx", ".md", ".tsx"],
      prerenderRoutes: ["/index", "404"],
      adapter: staticAdapter(),
    }),
  ],
});
