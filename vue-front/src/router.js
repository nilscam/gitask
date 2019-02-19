import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('./views/errors/NotFound.vue')
    },
    // {
    //   path: '/403',
    //   meta: {
    //     public: true,
    //   },
    //   name: 'AccessDenied',
    //   component: () => import()
    // },
    // {
    //   path: '/500',
    //   name: 'ServerError',
    //   component: () => import('')
    // },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: () => import('')
    // },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/flow',
      name: 'flow',
      component: () => import('./views/Flow.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Managerv2.vue'),
    },
    {
      path: '/dashboard/:project',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue')
    }
  ]
})
