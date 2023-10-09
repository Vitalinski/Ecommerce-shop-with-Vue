import { createRouter, createWebHistory } from "vue-router";
import MainPage from '@/views/MainPage.vue'
import ProductPage from'@/views/ProductPage.vue'
import ShoppingCart from'@/views/ShoppingCart.vue'
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
            },
            {
              path:'/cart',
              name:'ShoppingCart',
              component:ShoppingCart
                  },
],

  
})
router.beforeEach((to, from, next) => {  
    if (to.path !== from.path && to.name !== from.name ) {
      window.scrollTo({ top: 0 });
    }
    else{
        window.scrollTo({ top: 0, behavior:'smooth' });

    }
    next();
  });

export default router