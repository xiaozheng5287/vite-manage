<template>
    <div class="my-header">
        <div>
            <!--展开折叠按钮-->
            <a-button class="my-header__button" @click="toggleCollapsed">
                <MenuUnfoldOutlined v-if="menuState.collapsed" />
                <MenuFoldOutlined v-else />
            </a-button>
        </div>
        <div>
            <div>
                <!--如何获取已经访问过的菜单列表-->
                <!--路由式导航写法-->
                <router-link
               
               
                >
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { 
  MenuFoldOutlined,
  MenuUnfoldOutlined,
 } from '@ant-design/icons-vue';
import { h, reactive } from 'vue';
const menuState = reactive({
    collapsed: false,
})
const toggleCollapsed = () => {
    menuState.collapsed = !menuState.collapsed
}
</script>

<style lang="scss" scoped>
.my-header {
    display: flex;
    &__button {
        // background: rgb(0, 21, 41);
        border: none;
        color: #000;
        margin-top: 10px;
        box-shadow: none;
        z-index: 1000;
    }
}
</style>