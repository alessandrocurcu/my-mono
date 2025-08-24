import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: {
        'components/ui/button/index': resolve(fileURLToPath(new URL('.', import.meta.url)), 'src/components/ui/button/index.ts'),
        'lib/utils': resolve(fileURLToPath(new URL('.', import.meta.url)), 'src/lib/utils.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'tailwindcss'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      '@': resolve(fileURLToPath(new URL('.', import.meta.url)), 'src'),
    },
  },
});
