<template>
    <div class="my-header">
        <div>
            <a-button class="my-header__button" @click="toggleCollapsed">
                <MenuUnfoldOutlined v-if="menuState.collapsed" />
                <MenuFoldOutlined v-else />
            </a-button>
        </div>
        <div></div>
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
        background: rgb(0, 21, 41);;
        border: none;
        color: #fff;
        margin-top: 10px;
        box-shadow: none;
    }
}
</style>