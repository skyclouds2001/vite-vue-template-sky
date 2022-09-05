import { defineConfig } from 'eslint-define-config'

export default defineConfig({
    root: true,
    env: {
        browser: true,
        es2022: true,
        node: true,
        commonjs: true,
        'shared-node-browser': true,
        worker: true
      },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    globals: {},
    plugins: [],
    extends: [
        'eslint:recommended',
        "standard",
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        "plugin:n/recommended",
        "plugin:promise/recommended",
        "plugin:import/recommended"
        // 'prettier',
        // 'plugin:prettier/recommended',
    ],
    rules: {},
})
