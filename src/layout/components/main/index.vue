<template>
  <router-view v-slot="{ Component, route }">
    <!-- <transition name="move" mode="out-in"> -->
    <!-- <keep-alive :include="tabs.nameList"> -->
    <component :is="Component"></component>
    {{route}}
    <!-- </keep-alive> -->
    <!-- </transition> -->
  </router-view>
</template>

<script setup></script>

<style lang="scss" scoped></style>
