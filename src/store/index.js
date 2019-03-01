import Vue from 'vue'
import Vuex from 'vuex'
import appModules from '../modules'
import _ from 'lodash'
import router from '../router'
Vue.use(Vuex)

let modules = {}
_.forEach(appModules, module => {
  modules[module.name] = module.store
})

export default new Vuex.Store({
  modules,
  state: {
    logged: false,
    appMode: 'default',
    sidebarCollapsed: false
  },
  mutations: {
    login (state) {
      state.logged = true
    },
    logout (state) {
      state.logged = false
    },
    setMode: (state, payload) => {
      state.appMode = payload.mode
    },
    toggleSidebar: state => {
      state.sidebarCollapsed = !state.sidebarCollapsed
    }
  },
  actions: {
    login ({ commit }) {
      commit('login')
      router.push({ name: 'dashboard' })
    }
  }
})
