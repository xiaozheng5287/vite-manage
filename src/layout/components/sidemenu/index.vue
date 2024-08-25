<template>
<div>
    
  <h3 style="background:#001529; color:#fff; padding:10px 0 10px 20px; margin:0">后台管理系统</h3>
  <a-menu
    theme="dark"
    :items="items"
    defaultSelectedKeys="1"
    defaultOpenKeys="sub1"
    mode="inline"
  >
    <!-- <span>
      <a-Icon v-if="items.icon" :type="items.icon" class="anticon" />
      <span>{{ (items.title) }}</span>
    </span> -->
    <template>
        
    </template>
  </a-menu>
</div>
</template>

<script setup>
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { ref, computed } from "vue";
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
console.log('routeroute',route,'-------',router);
const items = [
  {
    key: "1",
    icon: PieChartOutlined,
    label: "Option 1",
  },
  {
    key: "2",
    icon: DesktopOutlined,
    label: "Option 2",
  },
  {
    key: "3",
    icon: ContainerOutlined,
    label: "Option 3",
  },
  {
    key: "sub1",
    label: "Navigation One",
    icon: MailOutlined,
    children: [
      {
        key: "5",
        label: "Option 5",
      },
      {
        key: "6",
        label: "Option 6",
      },
      {
        key: "7",
        label: "Option 7",
      },
      {
        key: "8",
        label: "Option 8",
      },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: AppstoreOutlined,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          {
            key: "11",
            label: "Option 11",
          },
          {
            key: "12",
            label: "Option 12",
          },
        ],
      },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
