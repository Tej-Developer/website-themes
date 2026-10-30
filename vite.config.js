import { resolve } from 'path';
import { defineConfig } from 'vite';

const currentDir = import.meta.dirname || process.cwd();

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(currentDir, 'index.html'),
        liquid_glass: resolve(currentDir, 'themes/liquid-glass/index.html'),
        glassmorphism: resolve(currentDir, 'themes/glassmorphism/index.html')
      }
    }
  }
});
