<template>
  <!--利用递归实现菜单及其子菜单的渲染-->
  <a-sub-menu v-if="menuList.children" :key="menuList.children.path">
    <template #icon>
      <component :is="menuList.meta.icon"/>
    </template>
    <template #title>
      <span>{{ menuList.meta.title }}</span>
    </template>
    <!-- <a-sub-menu v-for="subItem in (menuList.children)" :key="subItem.path"></a-sub-menu> -->
     <!-- <menu-item v-for="child in menuList.children" :item="child" :key="child.path" /> -->
    <a-menu-item v-for="subItem in (menuList.children)" :key="subItem.path">
      <template #icon>
      <component :is="subItem.meta.icon"/>
    </template>
    {{ subItem.meta.title }}
    </a-menu-item>
  </a-sub-menu>
  <a-menu-item v-else :key="item.path" v-for="item in menuList">
    <template #icon>
      <component :is="item.meta.icon"/>
    </template>
    {{ item.meta.title }}
  </a-menu-item>
</template>

<script setup>
import { reactive } from 'vue'
const menuItem = defineProps({
  routeItem: Object
});
console.log('menuItem',menuItem.routeItem);
const menuList = menuItem.routeItem.children
console.log('menuList',menuList);
</script>

<style lang="scss" scoped>

</style>