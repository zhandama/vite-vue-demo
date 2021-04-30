import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Class from '../pages/Class.vue'
import ClassDetail from '../pages/ClassDetail.vue'

import My from '../pages/my/My.vue'
import AddMyInfo from '../pages/my/AddMyInfo.vue'

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
        path: '/class',
        component: Class,
        meta: { hidetopbar: true, title:'课件'}
      },
      {
        path: '/classdetail',
        component: ClassDetail,
        meta: { hidefooter:true, title:'课件详情'}
      },
      {
        path: '/my',
        component: My,
        meta: { leftArrow: true, title:'个人中心'}
      },
      {
        path: '/addmyinfo',
        component: AddMyInfo,
        meta: { hidefooter:true, title:'个人信息'}
      },
      {
        path: '/test',
        component: test,
        meta: { title:'测试页面'}
      }
    ]
})

export default router