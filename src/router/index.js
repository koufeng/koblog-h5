import Vue from 'vue'
import Router from 'vue-router'

const homePage = () => import('@/pages/home.vue')
const portalPage = () => import('@/pages/portal.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/home',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/portal',
      name: 'portalPage',
      component: portalPage
    },
    // {
    //   path: '*',
    //   redirect: '/home',
    //   meta: {}
    // }
  ]
})

export default router