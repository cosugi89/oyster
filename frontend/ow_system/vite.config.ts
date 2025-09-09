import path from "path"; //npm install -D @types/node
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite"; //追加(tailwind.css)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), //追加
  ],
  resolve: {
    //追加(shadcn/ui)
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "build", // distからbuildに変更
  },
});
