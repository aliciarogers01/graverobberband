import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        admin: path.resolve(__dirname, "admin.html"),
        shows: path.resolve(__dirname, "shows.html"),
        signup: path.resolve(__dirname, "signup.html"),
        about: path.resolve(__dirname, "about.html"),
        merch: path.resolve(__dirname, "merch.html"),
        gallery: path.resolve(__dirname, "gallery.html"),
        graffitiWall: path.resolve(__dirname, "graffiti-wall.html"),
        contact: path.resolve(__dirname, "contact.html")
      }
    }
  }
});
