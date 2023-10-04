import { createRouter, createWebHistory } from "vue-router";
import MainPage from '@/views/MainPage.vue'
import ProductPage from'@/views/ProductPage.vue'

const router= createRouter({
    history: createWebHistory(),
    routes:[
        {
path:'/',
name:'MainPage',
component:MainPage
    },
    {
        path:'/products/:id',
        name:'ProductPage',
        component:ProductPage
            }
]
})

export default router