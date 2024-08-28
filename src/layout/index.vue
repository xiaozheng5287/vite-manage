

<script setup>
//在使用 <script setup> 的单文件组件中，导入的组件可以直接在模板中使用，无需注册：
import Header from "./components/header/index.vue";
import Footer from "./components/footer/index.vue";
import SideMenu from "./components/sidemenu/index.vue";
import Main from "./components/main/index.vue";
</script>

<template>
    <div class="my-container">
        <SideMenu class="my-container__sidemenu"></SideMenu>
        <div style="width: calc(100% - 260px);">
            
            <Header class="my-container__header"></Header>
            <Main class="my-container__main"></Main>
            <Footer class="my-container__footer"></Footer>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my-container {
    width: 100%;
    // height: 100%;
    // margin: 0;
    display: flex;
    justify-content: space-between;
    position: relative;
    background: rgb(0, 21, 41);
    &__sidemenu {
        width: 260px;
        height: 1000px;
    }
    &__header {
        height: 60px;
    }
    &__main {
        background: #fff;
        height: 100%;
    }
    &__footer {
        width: calc(100% - 260px);
    }
}

</style>