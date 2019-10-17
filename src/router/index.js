import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@views/home/home')
const Mine = () => import('@views/mine/mine')
const Prize = () => import('@views/prize/prize')
const Score = () => import('@views/score/score')

Vue.use(VueRouter)

const routes = [
  {
    //首页
    path: '',
    redirect: '/home'
  },
  {
    //首页
    path: '/home',
    component: Home
  },
  {
    // 我的
    path: '/mine',
    component: Mine
  },
  {
    // 开奖
    path: '/prize',
    component: Prize
  },
  {
    // 比分
    path: '/score',
    component: Score
  },
]
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
