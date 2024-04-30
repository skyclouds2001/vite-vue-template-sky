/** @type {import('stylelint').Config} */
export default {
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'layer', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
  },
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: [],
  overrides: [
    {
      files: ['**/*.vue'],
      extends: ['stylelint-config-standard-vue'],
      rules: {
        'no-empty-source': null,
      },
    },
  ],
  allowEmptyInput: true,
  cache: true,
  fix: true,
}
