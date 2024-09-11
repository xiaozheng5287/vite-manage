<template>
  <div>
    <h3 style="padding: 10px 0 10px 20px; margin: 0">后台管理系统</h3>
    <a-menu theme="light" mode="inline" v-model:selectedKeys="selectedKeys">
      <Menu-Item :routeItem="routes"> </Menu-Item>
    </a-menu>
  </div>
</template>

<script setup>
import MenuItem from "./item.vue";
import { ref, computed, h, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import routes from "@/router/menu/index.js";

const route = useRoute(); //用于访问当前路由对象。这个对象包含了当前路由的所有信息，比如路径、参数、查询字符串等。
const router = useRouter(); //用于访问路由实例。通过这个实例，你可以进行编程式导航，比如跳转到不同的路由、替换当前路由等。
const selectedKeys = ref(["1"]);
console.log("routeroute", route, "-------", routes);
watch(
  (route.path,
  (newPath) => {
    console.log("newPath", newPath);
    selectedKeys.value = [newPath];
  },
  { immediate: true })
);
</script>

<style lang="scss" scoped></style>
