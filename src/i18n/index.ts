import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh-CN.json'

type MessageSchema = typeof zhCN

const i18n = createI18n<[MessageSchema], 'zh-CN'>({
  legacy: false,
  globalInjection: false,
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
  },
})

export default i18n
