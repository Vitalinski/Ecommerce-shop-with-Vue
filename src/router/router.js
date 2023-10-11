import { createRouter, createWebHistory } from "vue-router";
import MainPage from '@/views/MainPage.vue'
import ProductPage from'@/views/ProductPage.vue'
import ShoppingCartPage from'@/views/ShoppingCartPage.vue'
import AllProductsPage from '@/views/AllProductsPage.vue'
import AboutUsPage from '@/views/AboutUsPage.vue'
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
              name:'ShoppingCartPage',
              component:ShoppingCartPage
                  },
                  {
                    path:'/products',
                    name:'AllProductsPage',
                    component:AllProductsPage
                        },
                        {
                          path:'/about',
                          name:'AboutUsPage',
                          component:AboutUsPage
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