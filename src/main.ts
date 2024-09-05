import { createApp } from 'vue'
import '@/styles/global.css'
import '@/styles/tailwind.css'
import App from '@/App.vue'
import router from '@/router'
import store from '@/stores'

createApp(App).use(router).use(store).mount('#app')
