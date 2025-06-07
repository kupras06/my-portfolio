import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  base: '/my-portfolio/', // Match your repository name

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
