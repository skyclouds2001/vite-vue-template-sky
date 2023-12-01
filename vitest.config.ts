import { defineConfig } from 'vitest/config'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import { viteMockServe as mock } from 'vite-plugin-mock'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
  plugins: [vue(), vueJsx(), legacy(), mock(), ElementPlus({})],
  test: {
    root: '.',
    include: ['**/?(*.){test,spec}.?(c|m)[jt]s?(x)'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/.{idea,fleet,vscode,git}/**', '**/{vite,vitest}.config.*'],
    watch: false,
    environment: 'jsdom',
    reporters: ['default', 'html'],
    coverage: {
      provider: 'v8',
      enabled: true,
    },
    alias: {
      '~': __dirname,
      '@': path.resolve(__dirname, 'src'),
    },
    cache: {},
  },
})
