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
      path: '/worker',
      name: 'worker',
      component: () => import('./views/Worker.vue')
    },
    {
      path: '/manager',
      name: 'manager',
      component: () => import('./views/Manager.vue'),
    },
    {
      path: '/dashboard/:project',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue')
    }
  ]
})
