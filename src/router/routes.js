import MainContainer from '@/views/layouts/MainContainer'
import modules from '../modules'
import _ from 'lodash'
let routes = []

modules.forEach(module => {
  routes = _.union(routes, module.routes)
})

export default [
  {
    path: '/',
    name: 'base',
    component: MainContainer,
    redirect: { name: 'dashboard' },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
          import(/* webpackChunkName: "about" */ '@/views/Dashboard.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () =>
          import(/* webpackChunkName: "about" */ '@/views/About.vue')
      },
      ...routes
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "404" */ '@/views/Login.vue')
  },
  {
    path: '*',
    name: '404',
    component: () =>
      import(/* webpackChunkName: "404" */ '@/views/errors/NotFound.vue')
  }
]
