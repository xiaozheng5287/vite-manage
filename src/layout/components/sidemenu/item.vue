<template>
  <!--利用递归实现菜单及其子菜单的渲染-->
  <div v-for="(menuItem, index) in menuList" :key="index" @click="handleClick(menuItem)">
    <a-sub-menu v-if="menuItem.children" :key="menuItem.children.path">
      <template #icon>
        <component :is="menuItem.meta.icon"/>
      </template>
      <template #title>
        <span>{{ menuItem.meta.title }}</span>
      </template>
      <!-- <a-sub-menu v-for="subItem in (menuList.children)" :key="subItem.path"></a-sub-menu> -->
       <!-- <menu-item v-for="child in menuList.children" :item="child" :key="child.path" /> -->
      <a-menu-item v-for="subItem in (menuItem.children)" :key="subItem.path">
        <template #icon>
        <component :is="subItem.meta.icon"/>
      </template>
      {{ subItem.meta.title }}
      </a-menu-item>
    </a-sub-menu>
    <a-menu-item v-else :key="menuItem.path">
      <template #icon>
        <component :is="menuItem.meta.icon"/>
      </template>
      {{ menuItem.meta.title }}
    </a-menu-item>
  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  routeItem: Object
});
const { routeItem } = toRefs(props)
console.log('rrrrr',routeItem.value);
const router = useRouter()
const menuList = routeItem.value[0].children
// const {}
// console.log('menuList',routeItem);
// console.log('menuList',menuList.value);
const handleClick = (menuItem) => {
  console.log('rrrrrr',router);
  console.log('menuItem',menuItem);
  router.push(menuItem.path)
}


</script>

<style lang="scss" scoped>

</style>