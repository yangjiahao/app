import Vue from 'vue'
import Router from 'vue-router'
import WelfareList from '@/components/public-welfare/welfare-list/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WelfareList',
      component: WelfareList,
      meta: {
        title: '久善公益',
        isNeedLogin: false,
        showBottomNav: true
      }
    },
    {
      path: '/welfare-list',
      name: 'WelfareList',
      component: WelfareList,
      meta: {
        title: '久善公益',
        isNeedLogin: false,
        showBottomNav: true
      }
    }
  ]
})
