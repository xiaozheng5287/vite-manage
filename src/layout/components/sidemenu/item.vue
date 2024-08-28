<template>
  <!--利用递归实现菜单及其子菜单的渲染-->
  <a-sub-menu v-if="menuItem.routeItem.children" :key="menuItem.routeItem.children.path">
    <template #icon>
      <component :is="menuItem.routeItem.meta.icon"/>
    </template>
    <template #title>
      <span>{{ menuItem.routeItem.meta.title }}</span>
    </template>
    <!-- <a-sub-menu v-for="subItem in (menuItem.routeItem.children)" :key="subItem.path"></a-sub-menu> -->
     <!-- <menu-item v-for="child in menuItem.routeItem.children" :item="child" :key="child.path" /> -->
    <a-menu-item v-for="subItem in (menuItem.routeItem.children)" :key="subItem.path">
      <template #icon>
      <component :is="subItem.meta.icon"/>
    </template>
    {{ subItem.meta.title }}
    </a-menu-item>
  </a-sub-menu>
  <a-menu-item v-else :key="menuItem.routeItem.path">
    <template #icon>
      <component :is="menuItem.routeItem.meta.icon"/>
    </template>
    {{ menuItem.routeItem.meta.title }}
  </a-menu-item>
</template>

<script setup>
import { reactive } from 'vue'
const menuItem = defineProps({
  routeItem: Object
});
console.log('menuItem',menuItem.routeItem);
</script>

<style lang="scss" scoped>

</style>