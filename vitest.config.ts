import { defineConfig } from 'vitest/config'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
  plugins: [vue(), vueJsx(), legacy(), ElementPlus()],
  css: {
    postcss: 'postcss.config.js',
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  test: {
    environment: 'happy-dom',
    include: ['tests/unit/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})
