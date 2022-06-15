import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  /*{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" *//* '../views/AboutView.vue')
  },*/

  {
    path: '/',
    name: 'MainCard',
    component: () => import('../components/MainCard.vue')
  },
  {
    path: '/SuccessCard',
    name: 'SuccessCard',
    component: () => import('../components/SuccessCard.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
