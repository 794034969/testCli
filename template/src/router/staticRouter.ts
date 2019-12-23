/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export  default [
    {
        path: '/',
        redirect:'/index'
    },
    {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '@/views/index.vue'),  //路由懒加载，webpackChunkName打包为一个js文件，否则会按单个组件生产js
        // meta: {icon: '', keepAlive: true, title: 'index'},
        children:[
            {
                path: '/home',
                name: 'home',
                component: () => import(/* webpackChunkName: "index" */ '@/views/home/home.vue'),
                // meta: {icon: '', keepAlive: true, title: 'home'}
            },
            {
                path: '/live',
                name: 'live',
                component: () => import(/* webpackChunkName: "index" */ '@/views/live/live.vue'),
                // meta: {icon: '', keepAlive: true, title: 'live'}
            }
        ]
    },

]