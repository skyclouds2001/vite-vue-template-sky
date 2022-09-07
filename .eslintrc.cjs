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
  plugins: [
    'prettier',
    'html',
    'jsdoc'
  ],
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:n/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:jsdoc/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-empty-function': 'warn',
    'n/no-missing-import': 'off',
    'import/no-unresolved': 'warn',
    '@typescript-eslint/ban-types': 'warn'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src/']
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.tsx']
      }
    }
  },
  overrides: [
    {
      files: [
        'auto-imports.d.ts',
        'components.d.ts',
        '.eslintrc.cjs',
        'vite.config.ts'
      ],
      rules: {
        'n/no-extraneous-import': 'off',
        'import/first': 'off',
        'import/named': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'n/no-unpublished-import': 'off',
        'import/default': 'off',
        'prettier/prettier': 'off'
      }
    }
  ]
})
