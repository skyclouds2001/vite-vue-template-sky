import { createApp } from 'vue'
import '@/styles/index.css'
import App from '@/App.vue'
import router from '@/router'
import store from '@/stores'

const app = createApp(App)

app.config.performance = true

app.use(router)

app.use(store)

app.mount('#app')
