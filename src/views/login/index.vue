<template>
    <div class="login-container">
        <h2>用户登录</h2>
        <a-form :labelCol="{ span: 4 }">
            <a-form-item label="用户名">
                <a-input placeholder="请输入用户名" v-model:value="loginFormRef.username"></a-input>
            </a-form-item>
            <a-form-item label="密码">
                <a-input placeholder="请输入密码" v-model:value="loginFormRef.password"></a-input>
            </a-form-item>
            <a-form-item label="">
                <a-button type="primary" @click="submit">登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const loginFormRef = reactive({
    username: '',
    password: ''
})
const submit = ()=>{
    const param = {
        username: loginFormRef.username,
        password: loginFormRef.password
    }
    console.log('submit!!!',param);

}
</script>

<style lang="scss" scoped>
.login-container {
    width: 400px;
    height: calc(100% - 200px);
    margin: 200px auto;
    padding: 100px 20px 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}
</style>