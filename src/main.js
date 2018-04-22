// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Wx from '@/common/utils/wx'
import Mint from 'mint-ui'
Vue.use(Mint)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  const {title, isNeedLogin, showBottomNav} = to.meta
  // 设置底部导航栏是否展示
  store.commit('setBottomNav', showBottomNav)
  // 设置标题
  Wx.setDocumentTitle(title || '')
  // 设置登录
  if (isNeedLogin) {
    // 判断是否登录，没登录则跳转登录页面
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
