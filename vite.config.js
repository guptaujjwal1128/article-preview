import { defineConfig } from "vite";

export default defineConfig({
  // This is the base path for the project.
  // It is used to serve the project from a subdirectory.
  // For example, if the project is hosted at https://yourusername.github.io/vaniila-js,
  // then the base path should be 'vaniila-js'.
  // This is useful for deploying the project to GitHub Pages.
  base: "/vaniila-js/",
  build: {
    outDir: "docs",
  },
});
