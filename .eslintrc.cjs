const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
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
    sourceType: 'module'
  },
  globals: {},
  plugins: [],
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:n/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended'
    // 'prettier',
    // 'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-empty-function': 'warn',
    'n/no-missing-import': 'warn',
    'import/no-unresolved': 'warn',
    '@typescript-eslint/ban-types': 'warn'
  },
  overrides: [
    {
      files: [
        'auto-imports.d.ts',
        'components.d.ts',
        '.eslintrc.cjs'
      ],
      rules: {
        'n/no-extraneous-import': 'off',
        'import/first': 'off',
        'import/named': 'off',
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
})
