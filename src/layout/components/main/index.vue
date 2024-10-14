<template>
<!--此处是main组件中展示布局内其他组件的路由展示入口-->
  <router-view v-slot="{ Component, route }">
    <keep-alive>  
      <component :is="Component" :key="route.path"></component>
    </keep-alive>
    <!-- </transition> -->
  </router-view>
</template>

<script setup></script>

<style lang="scss" scoped></style>
