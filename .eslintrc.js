module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
    commonjs: true,
    'shared-node-browser': true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard-with-typescript',
    // 'plugin:n/recommended',
    'plugin:promise/recommended',
    // 'plugin:import/recommended',
    'plugin:security/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
  ],
  // parser: 'vue-eslint-parser',
  parserOptions: {
    // parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: 'tsconfig.json',
    tsconfigRootDir: '.',
    extraFileExtensions: ['.vue'],
  },
  plugins: [
  ],
  rules: {
  },
  ignorePatterns: [
    'vite.config.ts',
    'vitest.config.ts',
    'playwright.config.ts',
    '.eslintrc.js',
    '.prettierrc.js',
    ".stylelintrc.js",
    'postcss.config.js',
    'tailwind.config.js',
    'commitlint.config.js',
    'lint-staged.config.js',
  ]
}
