import js from '@eslint/js'
import globals from 'globals'
// import standard  from 'eslint-config-standard'
import prettier from 'eslint-config-prettier'
import vueParser from 'vue-eslint-parser'
import vuePlugin from 'eslint-plugin-vue'
import nodePlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import importPlugin from 'eslint-plugin-import'
import jsdocPlugin from 'eslint-plugin-jsdoc'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import vitestPlugin from 'eslint-plugin-vitest'
import playwrightPlugin from 'eslint-plugin-playwright'
// import testingLibraryPlugin from 'eslint-plugin-testing-library'
import typescript from 'typescript-eslint'

export default [
  js.configs.recommended,
  ...typescript.configs.recommended,
  ...typescript.configs.stylistic,
  ...vuePlugin.configs['flat/recommended'],
  nodePlugin.configs['flat/recommended'],
  promisePlugin.configs['flat/recommended'],
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  jsdocPlugin.configs['flat/recommended-typescript'],
  jsxA11yPlugin.flatConfigs.recommended,
  prettier,
  {
    name: 'custom',
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,vue}'],
    ignores: [],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.es2025,
        ...globals.browser,
        ...globals.worker,
        ...globals.serviceworker,
        ...globals.node,
        ...globals.commonjs,
      },
      parser: vueParser,
      parserOptions: {
        parser: typescript.parser,
        ecmaFeatures: {
          globalReturn: false,
          impliedStrict: true,
          jsx: true,
        },
        vueFeatures: {
          filter: false,
          interpolationAsNonHTML: true,
          styleCSSVariableInjection: true,
          customMacros: [],
        },
      },
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: 'warn',
    },
    plugins: {},
    rules: {
      // ...standard.rules,
      'n/no-missing-import': 'off',
      'n/no-missing-require': 'off',
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          directory: 'tsconfig.json',
        },
        node: true,
      },
    },
  },
  {
    name: 'custom-test-unit',
    files: ['**/tests/unit/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    ...vitestPlugin.configs.recommended,
  },
  {
    name: 'custom-test-component',
    files: ['**/tests/components/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    ...vitestPlugin.configs.recommended,
    // ...testingLibraryPlugin.configs['flat/vue'],
  },
  {
    name: 'custom-test-e2e',
    files: ['**/tests/e2e/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    ...playwrightPlugin.configs['flat/recommended'],
  },
]
