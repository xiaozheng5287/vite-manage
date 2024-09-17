import { createApp } from 'vue'
import App from './App.vue'
//在main.js中引入下载好的依赖
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
//引入pinia
import { createPinia } from 'pinia'

import './permission'
//引入router
import router from './router';  



const pinia = createPinia()

const app = createApp(App)
app.use(Antd)
app.use(pinia)
app.use(router).mount('#app')
