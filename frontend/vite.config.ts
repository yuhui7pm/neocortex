import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS({
      presets: [presetUno(), presetAttributify(), presetIcons()],
      // Enable strict CSS checking
      safelist: 'prose prose-sm m-auto text-left'.split(' '),
      // Enable inspector for development
      inspector: true,
    }),
  ],
  base: process.env.GITHUB_ACTIONS ? '/neocortex/' : '/',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
});
