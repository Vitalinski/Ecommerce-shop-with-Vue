import { createRouter, createWebHistory } from "vue-router";
import MainPage from '@/views/MainPage.vue'

const router= createRouter({
    history: createWebHistory(),
    routes:[
        {
path:'/',
name:'MainPage',
component:MainPage
    }
]
})

export default router