import path from 'node:path'
import url from 'node:url'
import { type Plugin, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import ElementPlus from 'unplugin-element-plus/vite'
import { VitePWA as pwa } from 'vite-plugin-pwa'
import i18n from '@intlify/unplugin-vue-i18n/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { checker } from 'vite-plugin-checker'

const env = loadEnv(process.env.NODE_ENV ?? 'development', '.')

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    legacy(),
    ElementPlus({}),
    pwa({
      registerType: 'autoUpdate',
      manifest: false,
    }),
    i18n({
      include: path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), './src/i18n/locales/**'),
    }),
    checker({
      vueTsc: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx,vue}"',
        useFlatConfig: true,
      },
      // stylelint: {
      //   lintCommand: 'stylelint "./src/**/*.{vue,css}"',
      // },
    }),
    visualizer() as unknown as Plugin,
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '.'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorMaxWorkers: true,
    devSourcemap: true,
  },
  json: {
    namedExports: false,
    stringify: 'auto',
  },
  server: {
    host: env.VITE_DEV_SERVER_HOST ?? 'localhost',
    port: Number.parseInt(env.VITE_DEV_SERVER_PORT) ?? 5173,
    strictPort: true,
    open: true,
  },
  preview: {
    host: env.VITE_PREVIEW_SERVER_HOST ?? 'localhost',
    port: Number.parseInt(env.VITE_PREVIEW_SERVER_PORT) ?? 4173,
    strictPort: true,
    open: true,
  },
})
