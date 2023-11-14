import { resolve } from "path";
import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import nodeExternals from "rollup-plugin-node-externals";

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, "lib/index.js"),
      name: "Erb3/ui",
      fileName: "erb3-ui",
      formats: ["es"],
    },
  },
  plugins: [
    { enforce: "pre", ...nodeExternals() },
    vue(),
    svgLoader({
      svgoConfig: {
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
    dts(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./lib"),
    },
  },
});
