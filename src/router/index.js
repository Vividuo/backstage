import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js'
import store from '@/store'
import whiteList from './whiteList.js'
import _ from 'lodash'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  // 未登录
  if (!store.state.logged) {
    if (_.includes(whiteList, to.name)) {
      return next()
    }
    return next({ name: 'login' })
  }
  // 已登录
  if (to.name === 'login') {
    return next({ name: 'dashboard' })
  }
  return next()
})
export default router
