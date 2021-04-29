import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import My from '../pages/My.vue'

import test from '../pages/test.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: Home,
        meta: { hidetopbar: true, title:'学习'}
      },
      {
        path: '/my',
        component: My,
        meta: { title:'个人中心'}
      },
      {
        path: '/test',
        component: test
      }
    ]
})

export default router