<template>
  <!--利用递归实现菜单及其子菜单的渲染-->
  <div v-for="(menuItem) in routeList" @click="handleClick(menuItem)" :key="menuItem.name">
    <a-sub-menu v-if="menuItem.children && menuItem.children.length > 0">
      <template #icon>
        <component :is="menuItem.meta?.icon"/>
      </template>
      <template #title>
        <span>{{ menuItem.meta?.title }}</span>
      </template>
      <!-- <a-sub-menu v-for="subItem in (menuList.children)" :key="subItem.path"></a-sub-menu> -->
       <!-- <menu-item v-for="child in menuList.children" :item="child" :key="child.path" /> -->
      <!-- <a-menu-item v-for="subItem in (menuItem.children)" :key="subItem.path">
        <template #icon>
        <component :is="subItem.meta.icon"/>
      </template>
      {{ subItem.meta.title }}
      </a-menu-item> -->
      <item :routeList="menuItem.children"></item>
    </a-sub-menu>
    <a-menu-item v-else>
      <template #icon>
        <component :is="menuItem.meta?.icon"/>
      </template>
      {{ menuItem.meta?.title }}
    </a-menu-item>
  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  routeList: Object
});
const { routeList } = toRefs(props)
console.log('rrrrr',routeList.value);
const router = useRouter()
// const menuList = routeList.value[0].children
// const {}
// console.log('menuList',routeList);
// console.log('menuList',menuList.value);
const handleClick = (menuItem) => {
  console.log('rrrrrr',router);
  console.log('menuItem',menuItem);
  router.push(menuItem.path)
}


</script>

<style lang="scss" scoped>

</style>