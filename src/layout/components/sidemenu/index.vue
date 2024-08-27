<template>
<div>
    
  <h3 style="background:#001529; color:#fff; padding:10px 0 10px 20px; margin:0">后台管理系统</h3>
  <a-menu
    theme="dark"
    defaultSelectedKeys="1"
    defaultOpenKeys="sub1"
    mode="inline"
  >
    <Menu-Item v-for="routeItem in routeList" :key="routeItem.path" :routeItem="routeItem"></Menu-Item>
  </a-menu>
</div>
</template>

<script setup>
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons-vue";
import MenuItem from "./item.vue"
import { ref, computed, h, reactive } from "vue";
import { useRoute, useRouter } from 'vue-router'
import routes from '@/router'

const route = useRoute()
const router = useRouter()
console.log('routeroute',route,'-------',routes);
// const routeList = [
//   {
//     key: "1",
//     icon: () => h(PieChartOutlined),
//     label: "Option 1",
//     path: '/1'
//   },
//   {
//     key: "2",
//     icon: () => h(DesktopOutlined),
//     label: "Option 2",
//      path: '/2'
//   },
//   {
//     key: "3",
//     icon: () => h(ContainerOutlined),
//     label: "Option 3",
//     path: '/3'
//   },
//   {
//     key: "sub1",
//     label: "Navigation One",
//     icon: () => h(MailOutlined),
//     children: [
//       {
//         key: "5",
//         label: "Option 5",
//       },
//       {
//         key: "6",
//         label: "Option 6",
//       },
//       {
//         key: "7",
//         label: "Option 7",
//       },
//       {
//         key: "8",
//         label: "Option 8",
//       },
//     ],
//     path: '/4'
//   },
//   {
//     key: "sub2",
//     label: "Navigation Two",
//     icon: () => h(AppstoreOutlined),
//     children: [
//       {
//         key: "9",
//         label: "Option 9",
//       },
//       {
//         key: "10",
//         label: "Option 10",
//       },
//       {
//         key: "sub3",
//         label: "Submenu",
//         children: [
//           {
//             key: "11",
//             label: "Option 11",
//           },
//           {
//             key: "12",
//             label: "Option 12",
//           },
//         ],
//       },
//     ],
//     path: '/5'
//   },
// ];
const routeList = reactive({routes})
console.log('routeList',routeList);


</script>

<style lang="scss" scoped></style>
