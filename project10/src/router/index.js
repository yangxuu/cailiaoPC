import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import productcenter from '@/components/productcenter'
import contact from '@/components/contact'
import introduce from '@/components/introduce'
import detail from '@/components/detail'
import ErrPage from '@/components/common/ErrPage'
Vue.use(Router)
export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: '网站首页',
      component: index
    },
    {
      path: '/productcenter',
      name: '产品中心',
      component: productcenter
    },
    {
      path: '/contact',
      name: '联系我们',
      component: contact
    },
    {
      path: '/introduce',
      name: '公司介绍',
      component: introduce
    },
    {
      path: '/detail',
      name: '商品详情',
      component: detail
    },
    {
      path: '*',
      component: ErrPage
    }
  ]
})
