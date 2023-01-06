module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    'plugin:prettier/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  plugins: [
    'vue'
  ],
  rules: {
  },
  ignorePatterns: [
    'vite.config.ts',
    '.eslintrc.js'
  ]
}
