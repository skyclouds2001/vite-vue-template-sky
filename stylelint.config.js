/** @type {import('stylelint').Config} */
export default {
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'layer', 'apply', 'config'],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme'],
      },
    ],
  },
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: [],
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  allowEmptyInput: true,
  cache: true,
  fix: true,
  overrides: [
    {
      files: ['**/*.vue'],
      extends: ['stylelint-config-standard-vue'],
      rules: {
        'no-empty-source': null,
      },
    },
  ],
}
