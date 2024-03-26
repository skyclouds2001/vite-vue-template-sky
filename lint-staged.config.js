export default {
  '*.{js,jsx,ts,tsx,vue}': ['eslint --fix'],
  '*.{js,jsx,ts,tsx,vue,html,json,md,css}': ['prettier --write'],
  '*.{vue,css}': ['stylelint --fix'],
}
