import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue' // 首页学习
import HomeDetail from '../pages/HomeDetail.vue'
import Class from '../pages/Class.vue' // 课件
import Question from '../pages/Question.vue' // 问卷
import QuestionDetail from '../pages/QuestionDetail.vue' // 问卷详情
import Exam from '../pages/exam/Exam.vue' // 答题
import ExamSelect from '../pages/exam/ExamSelect.vue' // 答题选择，混合or闯关
import ExamStart from '../pages/exam/ExamStart.vue' // 开始答题
import ExamEnd from '../pages/exam/ExamEnd.vue' // 结束答题
import Search from '../pages/Search.vue' // 搜索


import My from '../pages/my/My.vue' // 个人中心
import MyHistory from '../pages/my/MyHistory.vue' // 学习历史记录
import MyQuestion from '../pages/my/MyQuestion.vue' // 我的问卷
import MyCollect from '../pages/my/MyCollect.vue' // 我的收藏
import MyInfo from '../pages/my/MyInfo.vue' // 修改个人信息
import MyChildren from '../pages/my/MyChildren.vue' // 修改子女信息
import Score from '../pages/my/Score.vue' // 积分明细
import Address from '../pages/my/Address.vue' // 地址
import AddressEdit from '../pages/my/AddressEdit.vue' // 地址编辑


import test from '../pages/test.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: Home,
        meta: {keepAlive:true, hidetopbar: true, title:'学习'} //hidefooter:底部tab,hidetopbar:头部logo+搜索, leftArrow:返回箭头
      },
      {
        path: '/class',
        component: Class,
        meta: {keepAlive:true, hidetopbar: true, title:'课件'}
      },
      {
        path: '/homedetail',
        component: HomeDetail,
        meta: { hidefooter:true, title:'学习详情'}
      },
      {
        path: '/question',
        component: Question,
        meta: {keepAlive:true, hidetopbar:true, title:'问卷'}
      },
      {
        path: '/questiondetail',
        component: QuestionDetail,
        meta: { hidefooter:true, title:'问卷详情'}
      },
      {
        path: '/exam',
        component: Exam,
        meta: { hidetopbar: true, title:'答题'}
      },
      {
        path: '/examselect',
        component: ExamSelect,
        meta: { hidefooter:true, title:'答题选择'}
      },
      {
        path: '/examstart',
        component: ExamStart,
        meta: { hidefooter:true, isDialog:true, title:'答题'} //isDialog 返回弹窗提示
      },
      {
        path: '/examend',
        component: ExamEnd,
        meta: { hidefooter:true, title:'答题统计'}
      },
      {
        path: '/search',
        component: Search,
        meta: { hidefooter:true, title:'搜索'}
      },
      {
        path: '/my',
        component: My,
        meta: { leftArrow: true, title:'个人中心'}
      },
      {
        path: '/mycollect',
        component: MyCollect,
        meta: { hidefooter:true, title:'我的收藏'}
      },
      {
        path: '/myhistory',
        component: MyHistory,
        meta: { hidefooter:true, title:'我的历史'}
      },
      {
        path: '/myquestion',
        component: MyQuestion,
        meta: { hidefooter:true, title:'我的问卷'}
      },
      {
        path: '/score',
        component: Score,
        meta: { hidefooter:true, title:'积分明细'}
      },
      {
        path: '/address',
        component: Address,
        meta: { hidefooter:true, title:'我的地址'}
      },
      {
        path: '/addressedit',
        component: AddressEdit,
        meta: { hidefooter:true, title:'地址编辑'}
      },
      {
        path: '/myinfo',
        component: MyInfo,
        meta: { hidefooter:true, title:'个人信息'}
      },
      {
        path: '/mychildren',
        component: MyChildren,
        meta: { hidefooter:true, title:'子女信息管理'}
      },
      {
        path: '/test',
        component: test,
        meta: { title:'测试页面'}
      }
    ]
})

export default router