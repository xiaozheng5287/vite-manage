/**
 * 此处配置路由拦截
 */
import router from './router'

router.beforeEach((to, from, next) => {
    console.log('tttttt',to);
    next()
})