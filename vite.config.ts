import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 5175 },
  // GitHub Pages serves the site under /portfolio/ — only affects the production build,
  // local dev keeps running at the root.
  base: process.env.GITHUB_PAGES === "true" ? "/portfolio/" : "/",
});
