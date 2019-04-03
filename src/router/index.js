import Vue from 'vue'
import Router from 'vue-router'
// 引入两个第三方模块
import Msite from '@/pages/home/Msite'// @表示src目录
import Discover from '@/pages/discover/Discover'
import Order from '@/pages/order/Order'
import Profile from '@/pages/profile/Profile'
import Shop from '@/pages/shop/shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/discover',
      component: Discover
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/shop',
      component: Shop
    }
  ]
})
