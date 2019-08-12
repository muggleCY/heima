import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Homecontainer from '@/components/tabbar/homecontainer.vue'
import ContactContainer from '@/components/tabbar/contactcontainer.vue'
import CatrContainer from '@/components/tabbar/cartcontainer.vue'
import SearchContainer from '@/components/tabbar/searchcontainer.vue'
import NewList from '@/components/news/newsList.vue'
import NewsInfo from '@/components/news/newsInfo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Homecontainer',
      component: Homecontainer
    },
    {
      path: '/contact',
      name: 'ContactContainer',
      component: ContactContainer
    },
    {
      path: '/cart',
      name: 'CatrContainer',
      component: CatrContainer
    },
    {
      path: '/search',
      name: 'SearchContainer',
      component: SearchContainer
    },{
      path:'/',
      redirect:'/home'
    },{
      path: '/home/newlist',
      name: 'NewList',
      component: NewList
    },{
      path: '/home/newsinfo/:id',
      name: 'NewsInfo',
      component: NewsInfo
    }
  ],
  linkActiveClass: 'mui-active',
})
