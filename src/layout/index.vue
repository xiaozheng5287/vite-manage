

<script setup>
//在使用 <script setup> 的单文件组件中，导入的组件可以直接在模板中使用，无需注册：
import Header from "./components/header/index.vue";
import Footer from "./components/footer/index.vue";
import SideMenu from "./components/sidemenu/index.vue"
</script>

<template>
    <div class="my-container">
        <SideMenu class="my-container__sidemenu"></SideMenu>
        <div>
            
            <Header class="my-container__header"></Header>
            <Footer class="my-container__footer"></Footer>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my-container {
    width: 1200px;
    height: 500px;
    // margin: 0;
    display: flex;
    &__sidemenu {
        width: 260px;
        height: 500px;
    }
    &__header {
        width: calc(100% - 260px);
        height: 60px;
    }
    &__footer {
        width: calc(100% - 260px);
    }
}

</style>