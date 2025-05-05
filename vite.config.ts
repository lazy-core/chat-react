import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [react(), tailwindcss(), libInjectCss()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.ts"),
      name: "LazyChat",
      formats: ["es", "umd"],
      fileName: (format) => `lazy-chat-react.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
