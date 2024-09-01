<template>
<div>
    
  <h3 style="background:#001529; color:#fff; padding:10px 0 10px 20px; margin:0">后台管理系统</h3>
  <a-menu
    theme="dark"
    mode="inline"
  >
    <Menu-Item v-for="routeItem in routeList" :key="routeItem.name" :routeItem="routeItem">
    </Menu-Item>
  </a-menu>
</div>
</template>

<script setup>
import MenuItem from "./item.vue"
import { ref, computed, h, reactive } from "vue";
import { useRoute, useRouter } from 'vue-router'

const routes = defineProps({
  routes: Array
})
// const route = useRoute()//用于访问当前路由对象。这个对象包含了当前路由的所有信息，比如路径、参数、查询字符串等。
// const router = useRouter()//用于访问路由实例。通过这个实例，你可以进行编程式导航，比如跳转到不同的路由、替换当前路由等。

const route = useRoute()//用于访问当前路由对象。这个对象包含了当前路由的所有信息，比如路径、参数、查询字符串等。
const router = useRouter()//用于访问路由实例。通过这个实例，你可以进行编程式导航，比如跳转到不同的路由、替换当前路由等。
const routeList = reactive([])
console.log('routeroute',route.path,'-------',routes);
routes.routes.map((routeItem)=>{
  console.log('routeItem',routeItem);
  routeList.push(routeItem)
})
// const routeList = reactive({routes})
// console.log('routeList',routeList);


</script>

<style lang="scss" scoped></style>
