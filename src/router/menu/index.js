/**
 * 左侧导航栏菜单的路由配置
 */

//制定路由规则

const routes = [
  {
      path: '/bill',
      name: 'bill',
      //使用路由懒加载的方式，只有当路由被访问时，才会加载对应的组件
      component: ()=> import('@/views/bill/index.vue'),
      children: [
        {
            path: 'manage',
            name: 'manage',
            component: () => import('@/views/bill/manage.vue'),
            meta: {
              title: '账单管理',
              keepAlive: true,
            },
        },
      ]
  },

]


//向外暴露路由
export default routes