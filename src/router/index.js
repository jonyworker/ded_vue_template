// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/lab1' // 導回預設頁面
  },
  {
    path: '/lab1',
    component: () => import('../views/Lab1/Lab1View.vue')
  },
  {
    path: '/lab2',
    component: () => import('../views/Lab2/Lab2View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
