<template>
  <div>
    <a-form :model="formModel">
      <template v-for="(item, index) in formConfig" :key="index">
        <!--根据表单配置项不同的type来区分具体渲染某个表单-->
        <a-form-item :label="item.label">
          <!--当然每个表单类型都有些公共属性，也有一些自己独有的属性-->
          <!-- <a-input v-model:value="formModel[item.fieldName]"></a-input> -->
          <component
            :is="getComponentType(item.type)"
            v-model:value="formModel[item.fieldName]"
          />
        </a-form-item>
      </template>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import { Form as AForm, Input, Button, FormItem } from 'ant-design-vue'
defineProps({
  formConfig: {
    type: Array,
    required: true,
  },
  formModel: {
    type: Object,
    required: true,
  },
});

const componentPrefix = "a-"; // Ant Design组件前缀

const getComponentType = (type) => {
  return componentPrefix + type.toLowerCase();
};
</script>

<style lang="scss" scoped></style>
