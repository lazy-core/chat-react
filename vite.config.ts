/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: "src/playground",
  plugins: [
    react(),
    tailwindcss(),
    libInjectCss(),
    dts({
      tsconfigPath: "tsconfig.lib.json",
    }),
  ],

  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.ts"),
      name: "LazyChat",
      formats: ["es", "umd"],
      fileName: (format) => `lazy-chat-react.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "reactJsxRuntime",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
