<template>
    <div class="scroll-bar">
        <div class="tags-view" v-for="(item, index) in tagsViewList" :key="index">
            <div>{{item.meta.title}}</div>
        </div>
    </div>
</template>

<script setup>
import { useTagsViewStore } from '@/store/modules/tagsview'
import { ref, watch, computed } from 'vue';
import { useRoute, useRouter } from "vue-router";
const {tagsViewList} = useTagsViewStore().$state
const addTagsview = useTagsViewStore().addTagsView
console.log('tagsViewList', tagsViewList);
const route = useRoute()
// const path = computed(() => route.path)
console.log('tagsview---route',route);
//监听路由的变化即可通过add方法为tagsview添加项
watch(
    route,(val)=>{
        console.log('vvvvvv',val);
        addTagsview(val)
    },
    {
        deep: true,
        immediate: true
    }
)


</script>

<style lang="scss" scoped>
//外层大的滚动容器
.scroll-bar {
    display: flex;
    width: 100%;
    overflow-x: scroll;
    //隐藏滚动条
}
//内层的循环体
.tags-view {
    width: 100px;
    height: 30px;
    background: rgba(34, 28, 64, 0.1);
    border-radius: 6px;
}
</style>                                                                                                                                                