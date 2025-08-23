import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  // Use relative paths for assets in the build output.
  // This is important for deploying to GitHub Pages.
  base: './', 
});
