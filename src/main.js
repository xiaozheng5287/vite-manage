import { createApp } from 'vue'
import App from './App.vue'
//在main.js中引入下载好的依赖
import Antd from 'ant-design-vue';
import './permission'
//引入router
import router from './router';  





const app = createApp(App)
app.use(Antd)
app.use(router).mount('#app')
