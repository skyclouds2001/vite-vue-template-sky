import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'MainPage',
      path: '/',
      component: () => import('@/views/MainPage.vue')
    }
  ]
})
