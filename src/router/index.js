import Vue from 'vue'
import Router from 'vue-router'

const layout = () => import('@/pages/layout/index.vue')
const homePage = () => import('@/pages/home.vue')
const portalPage = () => import('@/pages/portal.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'layout',
      component: layout,
      children: [
        {
          path: '/home',
          name: 'homePage',
          component: homePage
        },
        {
          path: '/portal',
          name: 'portalPage',
          component: portalPage
        }
      ]
    },
    
    {
      path: '*',
      redirect: '/',
      meta: {}
    }
  ]
})

export default router