/* eslint-disable */
import {
    RouteRecordRaw,
    createRouter,
    createWebHashHistory,
    createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    name: 'Cocktails',
    component: () => import('../pages/index_cocktails.vue')
}, ]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router