/**
 * 此处配置路由拦截
 */
import router from './router'

router.beforeEach((to, from, next) => {
    console.log('localStorage.getItem(token)',localStorage.getItem('token'));
    //判断有没有token，没有需要跳转到登录页
    if(localStorage.getItem('token')) {
        if(to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else {
        if(to.path === '/login') {
            next()
        }
        console.log('111111111111111111');
        next('/login')
    }
})

// router.afterEach((to)=>{
    
// })