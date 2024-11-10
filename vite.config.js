import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Set the base path to "/" if deploying to root or specify sub-path like "/my-app/"
});
