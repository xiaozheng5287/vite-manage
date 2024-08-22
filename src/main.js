import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//在main.js中引入下载好的依赖
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';

//引入router
import router from './router';  





const app = createApp(App)
app.use(Antd)
app.use(router).mount('#app')
