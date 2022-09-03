import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
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
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),
    Icons({
      autoInstall: true,
    }),
    Inspect(),
  ],
});
