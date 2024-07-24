//第一步:引入必要的文件
import Vue from 'vue';//加载全局组件时,都需要引入Vue
import Router from 'vue-router';//引入vue-router
//引入在路由中需要用到的组件
import Home from '@/pages/index/index';

//第二步:加载Router
Vue.use(Router);//加载全局组件Router

//第三步:配置路由实例
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Home,
    },
  ]
})
