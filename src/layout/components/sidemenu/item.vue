<template>
  <!--利用递归实现菜单及其子菜单的渲染-->
  <a-sub-menu v-if="routeItem.children" :key="routeItem.path">
    <template #title>
      <span>
        <span>{{ routeItem.meta.title }}</span>
      </span>
    </template>
    
    <a-menu-item v-if="routeItem.children.children"></a-menu-item>
  </a-sub-menu>
  <a-menu-item v-else></a-menu-item>
</template>

<script setup>
import { reactive, defineProps  } from 'vue'
const menuItem = defineProps({
  routeItem: Object
});
</script>

<style lang="scss" scoped>

</style>