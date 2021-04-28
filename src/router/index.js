import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Contact from '../pages/contact.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/contact',
        component: Contact
      }
    ]
})

export default router