import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
  plugins: [vue(), legacy(), ElementPlus()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  }
})
