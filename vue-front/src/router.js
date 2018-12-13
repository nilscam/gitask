import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/flow',
      name: 'flow',
      component: () => import('./views/Flow.vue')
    },
    {
      path: '/manager',
      name: 'manager',
      component: () => import('./views/Managerv2.vue'),
    },
    {
      path: '/dashboard/:project',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue')
    }
  ]
})
