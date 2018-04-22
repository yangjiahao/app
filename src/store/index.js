import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    gShowBottomNav: true, // 全局控制是否展示底部导航栏
    showBottomNav: false // 根据路由中配置来设置改属性
  },
  getters: {
    getBottomNav: function (state) {
      return state.gShowBottomNav && state.showBottomNav
    }
  },
  mutations: {
    // 全局设置，某些平台中运行可能不需要H5自身底部导航
    setGBottomNav (state, isShow) {
      state.gShowBottomNav = isShow
    },
    setBottomNav (state, isShow) {
      state.showBottomNav = isShow
    }
  },
  actions: {
  }
})

export default store
