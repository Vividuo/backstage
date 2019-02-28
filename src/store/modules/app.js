export default {
  namespaced: true,
  state: {
    appMode: 'default',
    sidebarCollapsed: false
  },
  mutations: {
    setMode: (state, payload) => {
      state.appMode = payload.mode
    },
    toggleSidebar: state => {
      state.sidebarCollapsed = !state.sidebarCollapsed
    }
  },
  actions: {}
}
