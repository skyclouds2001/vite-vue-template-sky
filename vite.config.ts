import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ElementPlus from 'unplugin-element-plus/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  root: '.',
  base: '/',
  define: {},
  publicDir: 'public',
  cacheDir: 'node_modules/.vite',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    dedupe: [],
    conditions: [],
    mainFields: ['module', 'jsnext:main', 'jsnext'],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    preserveSymlinks: false,
  },
  css: {
    modules: {},
    postcss: {},
    preprocessorOptions: {},
    devSourcemap: false,
  },
  json: {
    namedExports: true,
    stringify: true,
  },
  esbuild: {},
  assetsInclude: [],
  logLevel: 'info',
  clearScreen: false,
  envDir: 'root',
  envPrefix: 'VITE_',
  appType: 'spa',
  plugins: [
    vue({
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
      reactivityTransform: false,
      customElement: /\.ce\.vue$/,
      isProduction: false,
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
        /\.md$/,
      ],
      imports: [
        'vue',
        'vue-router',
        {
          'axios': [
            ['default', 'axios'],
          ],
        },
      ],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
      vueTemplate: true,
      dts: true,
      eslintrc: {
        enabled: true,
        filepath: path.resolve(__dirname, 'eslintrc-auto-import.json'),
        globalsPropValue: true,
      },
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: false,
          enabledCollections: ['ep'],
        }),
      ],
      dts: true,
      directoryAsNamespace: false,
      globalNamespaces: [],
      directives: true,
      importPathTransform: v => v,
      allowOverrides: false,
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
    }),
    Icons({
      autoInstall: true,
    }),
    Inspect(),
    ElementPlus({
      useSource: false,
      lib: 'element-plus',
      format: 'esm',
      prefix: 'El',
      defaultLocale: 'zh-cn',
    }),
  ],
});
