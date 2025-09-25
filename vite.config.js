import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const __dirname = path.resolve();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@components", replacement: path.resolve(__dirname, "src/components") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
      { find: "@constants", replacement: path.resolve(__dirname, "src/constants") },
    ],
  },
});
