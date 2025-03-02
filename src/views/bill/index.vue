<template>
  <div>在这里尝试二次封装表单组件</div>
  <ZForm :formConfig="formConfig" :formModel="formModel"></ZForm>
</template>

<script setup>
import { ref } from 'vue'
import ZForm from '../../components/z-form/index.vue'
import formConfig from '../../components/z-form/formConfig'
const formModel = ref({
  myinput: '',
})
</script>

<style lang="scss" scoped></style>
