import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuVisible: false,
    overlayVisible: false,
    desktop: false,
    viewport: 992
  },
  getters: {
    menuVisible: s => s.menuVisible,
    overlayVisible: s => s.overlayVisible,
    desktop: s => s.desktop,
    viewport: s => s.viewport
  },
  mutations: {
    set (state, [namespace, payload]) {
      state[namespace] = payload;
    }
  }
})