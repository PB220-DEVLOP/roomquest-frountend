import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Ensure it works in dev server too
  },
  build: {
    outDir: 'dist',
  },
});
