import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import _ from 'lodash'
Vue.use(Router)

const router = new Router({
  routes
})

const whiteList = []

router.beforeEach((to, from, next) => {
  if (_.includes(whiteList, to.name)) {
    return next()
  }

  // 未登录
  // const isLogin = false
  // if (!isLogin) {
  //   return next({ name: 'login' })
  // }
  return next()
})
export default router
