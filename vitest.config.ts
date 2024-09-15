import { defineConfig } from 'vitest/config'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    root: '.',
    include: ['tests/{unit,components}/**'],
    exclude: ['node_modules/**', 'dist/**', '.{idea,fleet,vscode,git}/**', '*.config.*'],
    watch: false,
    environment: 'jsdom',
    reporters: ['default', 'json', 'html'],
    outputFile: {
      json: './vitest-report/report.json',
      html: './vitest-report/report.html',
    },
    coverage: {
      provider: 'v8',
      enabled: true,
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage-report',
      include: ['src/**'],
      exclude: ['*.{test,spec}.*'],
    },
    alias: {
      '~': __dirname,
      '@': path.resolve(__dirname, 'src'),
    },
    setupFiles: './vitest.setup.ts',
  },
})
