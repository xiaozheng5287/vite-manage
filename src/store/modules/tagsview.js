import { defineStore } from "pinia";

export const useTagsViewStore = defineStore("tagsView", {
  state: () => ({
    tagsViewList: [
    ],
  }),
  getters: {},
  actions: {
    // 添加tagsView
    addTagsView(route) {
      console.log('addTagsView',route.path);
      console.log('addTagsView---',this.tagsViewList);
      if (this.tagsViewList.some((item) => {
        console.log('item.path',item.path);
        item.path === route.path
      })) return;
      this.tagsViewList.push(route);
    },
  },
});
