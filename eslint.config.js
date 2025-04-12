import { defineConfig, globalIgnores } from 'eslint/config'
import js from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import css from '@eslint/css'
import { tailwindSyntax } from '@eslint/css/syntax'
import globals from 'globals'
import standardConfig from 'eslint-config-standard'
import prettierConfig from 'eslint-config-prettier'
// import vueParser from 'vue-eslint-parser'
// import vuePlugin from 'eslint-plugin-vue'
import nodePlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import importPlugin from 'eslint-plugin-import'
import jsdocPlugin from 'eslint-plugin-jsdoc'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import vitestPlugin from 'eslint-plugin-vitest'
import playwrightPlugin from 'eslint-plugin-playwright'
import testingLibraryPlugin from 'eslint-plugin-testing-library'
import typescript from 'typescript-eslint'

export default defineConfig([
  ...typescript.configs.recommended,
  ...typescript.configs.stylistic,
  promisePlugin.configs['flat/recommended'],
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  jsxA11yPlugin.flatConfigs.recommended,
  {
    name: 'custom',
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
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
      parser: typescript.parser,
      parserOptions: {
        ecmaFeatures: {
          globalReturn: false,
          impliedStrict: true,
          jsx: true,
        },
      },
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: 'warn',
    },
    plugins: {},
    rules: {
      ...standardConfig.rules,
      'n/no-missing-import': 'off',
      'n/no-missing-require': 'off',
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    ...js.configs.recommended,
    ...nodePlugin.configs['flat/recommended'],
    ...jsdocPlugin.configs['flat/recommended-typescript'],
  },
  // {
  //   name: 'custom-vue',
  //   files: ['**/*.vue'],
  //   ...vuePlugin.configs['flat/recommended'].at(0),
  //   ...vuePlugin.configs['flat/recommended'].at(1),
  //   languageOptions: {
  //     parser: vueParser,
  //     parserOptions: {
  //       parser: typescript.parser,
  //       vueFeatures: {
  //         filter: false,
  //         interpolationAsNonHTML: true,
  //         styleCSSVariableInjection: true,
  //         customMacros: [],
  //       },
  //     },
  //   },
  // },
  {
    name: 'custom-json',
    files: ['**/*.json'],
    language: 'json/json',
    ...json.configs.recommended,
  },
  ...markdown.configs.recommended,
  {
    name: 'custom-css',
    files: ['**/*.css'],
    language: 'css/css',
    languageOptions: {
      customSyntax: tailwindSyntax,
    },
    ...css.configs.recommended,
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
    ...testingLibraryPlugin.configs['flat/vue'],
  },
  {
    name: 'custom-test-e2e',
    files: ['**/tests/e2e/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    ...playwrightPlugin.configs['flat/recommended'],
  },
  globalIgnores(['node_modules/**', 'dist/**', '.{idea,fleet,vscode,git}/**', '*.config.*']),
  prettierConfig,
])
