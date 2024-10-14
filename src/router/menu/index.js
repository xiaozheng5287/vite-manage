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
  //所有的路由都默认为“/”的子路由，写的时候应该这样写(嵌套路由)
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    meta: {
      title: "首页",
      keepAlive: true,
      icon: PieChartOutlined,
    },
  },
  {
    path: "/bill",
    name: "bill",
    //使用路由懒加载的方式，只有当路由被访问时，才会加载对应的组件
    component: () => import("@/views/bill/index.vue"),
    children: [
      {
        path: "manage",
        name: "manage",
        component: () => import("@/views/bill/manage.vue"),
        meta: {
          title: "账单明细",
          keepAlive: true,
          // icon: () => h(DesktopOutlined),
          icon: DesktopOutlined,
        },
        children: [
          {
            path: "expense",
            name: "expense",
            component: () => import("@/views/bill/expense/index.vue"),
            meta: {
              title: "支出管理",
              keepAlive: true,
              // icon: () => h(DesktopOutlined),
              icon: DesktopOutlined,
            },
          },
          {
            path: "income",
            name: "income",
            component: () => import("@/views/bill/income/index.vue"),
            meta: {
              title: "收入管理",
              keepAlive: true,
              // icon: () => h(DesktopOutlined),
              icon: DesktopOutlined,
            },
          }
        ]
      },
    ],
    meta: {
      title: "账单管理",
      keepAlive: true,
      // icon: () => h(DesktopOutlined),
      icon: DesktopOutlined,
    },
    //   },
    // ]
  },
  {
    path: "/system",
    name: "system",
    meta: {
      title: "系统管理",
      keepAlive: true,
      icon: MailOutlined,
    },
    // component: () => import('@/views/system/index.vue'),
    children: [
      {
        path: "/user",
        name: "user",
        component: () => import("@/views/system/user/index.vue"),
        meta: {
          title: "用户管理",
          keepAlive: true,
          icon: AppstoreOutlined,
        },
      },
      {
        path: "/role",
        name: "role",
        component: () => import("@/views/system/role/index.vue"),
        meta: {
          title: "角色管理",
          keepAlive: true,
          icon: ContainerOutlined,
        },
      },
    ],
  },
  //https://www.bilibili.com/video/BV1FV4y157Zx/?p=23&spm_id_from=pageDriver
];

//向外暴露路由
export default routes;
