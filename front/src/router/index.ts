import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        name: 'index',
        path: '/',
        component: () => import('../pages/index/Index.vue'),
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('../pages/auth/Login.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
