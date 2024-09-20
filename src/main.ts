import { createApp } from 'vue'
import '@/styles/index.css'
import App from '@/App.vue'
import router from '@/router'
import store from '@/stores'
import i18n from '@/i18n'

const app = createApp(App)

app.config.performance = true

app.use(router)

app.use(store)

app.use(i18n)

app.mount('#app')
