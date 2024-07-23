//第一步:引入必要的文件
import Vue from 'vue';//加载全局组件时,都需要引入Vue
import Router from 'vue-router';//引入vue-router
//引入在路由中需要用到的组件
import Home from '@/pages/index/index';
import Example from '@/pages/example/index';

//第二步:加载Router
Vue.use(Router);//加载全局组件Router

//第三步:配置路由实例
export default new Router({
  //mode:'history', //路由模式:默认为hash,如果改为history,则需要后端进行配合
  //base:'/',//基路径:默认值为'/'.如果整个单页应用在/app/下,base就应该设为'/app/'.一般可以写成__dirname,在webpack中配置.
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
    {
      path: '/example',
      name: 'example',
      component: Example,
    }
  ]
})
