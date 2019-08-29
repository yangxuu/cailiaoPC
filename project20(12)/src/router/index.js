import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import productcenter from '@/components/productcenter'
import contact from '@/components/contact'
import cate from '@/components/cate'
import newcate from '@/components/newcate'
import introduce from '@/components/introduce'
import news from '@/components/news'
import newdetail from '@/components/newdetail'
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
      path: '/cate',
      name: '产品分类',
      component: cate
    },
    {
      path: '/newcate',
      name: '产品橱窗',
      component: newcate
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
      path: '/news',
      name: '新闻资讯',
      component: news
    },
    {
      path: '/newdetail',
      name: '新闻资讯',
      component: newdetail
    },
    {
      path: '*',
      component: ErrPage
    }
  ]
})
