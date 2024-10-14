/**
 * createRouter 是一个函数，用于创建一个新的路由实例。
 * 这个实例包含了所有的路由配置和路由行为。
 * createWebHistory 是一个函数，用于创建一个基于 HTML5 History API 的路由历史记录模式。
 * 这种模式使用 URL 的哈希部分（# 后面的部分）来管理路由，而不是使用查询参数。
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './menu';
//制定路由规则

const allRoutes = [
  {
      path: '/login',
      // redirect: '/home', //重定向
      name: 'login',
      //使用路由懒加载的方式，只有当路由被访问时，才会加载对应的组件
      component: ()=> import('@/views/login/index.vue')
  },
  ...routes
]

const router = createRouter({
    //设置路由模式
    history: createWebHashHistory(),
    routes: allRoutes,
})

//向外暴露路由
export default router