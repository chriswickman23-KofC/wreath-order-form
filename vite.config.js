import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/wreath-order-form/",
  plugins: [react()],
});
