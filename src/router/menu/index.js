/**
 * 左侧导航栏菜单的路由配置
 */

//制定路由规则
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons-vue";
const routes = [
  {
      path: '/home',
      name: 'home',
      icon: () => h(PieChartOutlined),
      component: () => import('@/layout/index.vue'),
      meta: {
        title: '首页',
        keepAlive: true,
      },
  },
  {
      path: '/bill',
      name: 'bill',
      icon: () => h(DesktopOutlined),
      //使用路由懒加载的方式，只有当路由被访问时，才会加载对应的组件
      component: ()=> import('@/views/bill/index.vue'),
      // children: [
      //   {
      //       path: 'manage',
      //       name: 'manage',
      //       component: () => import('@/views/bill/manage.vue'),
            meta: {
              title: '账单管理',
              keepAlive: true,
            },
      //   },
      // ]
  },
  {
    path: '/system',
    name: 'system',
    icon: () => h(MailOutlined),
    meta: {
      title: '系统管理',
      keepAlive: true,
    },
    // component: () => import('@/views/system/index.vue'),
    children: [
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/system/user/index.vue'),
        meta: {
          title: '用户管理',
          keepAlive: true,
        }
      },
      {
        path: '/role',
        name: 'role',
        component: () => import('@/views/system/role/index.vue'),
        meta: {
          title: '角色管理',
          keepAlive: true,
        }
      },
    ]
  }

]


//向外暴露路由
export default routes