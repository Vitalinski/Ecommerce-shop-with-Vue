<template>
    <div class="products-container"> 
        
     <div class="products">
          <Product v-for="(product,i) of products" :key="i"
          :img="product.img" :title="product.title" :price="product.price"
          ></Product>
          
     </div>
     <Button class="products-btn"></Button>

    </div>
</template>

<script setup> 
import Product from './Product.vue';
import Button from './Button.vue';
const products = [
    {
img:'public/img/photo1.jpg',
title:'The Dandy chair',
price:'£250'
},
{
img:'public/img/photo2.jpg',
title:'Rustic Vase Set',
price:'£155'
},
{
img:'public/img/photo3.jpg',
title:'The Silky Vase',
price:'£125'
},
{
img:'public/img/photo4.jpg',
title:'The Lucy Lamp',
price:'£399'
},

]

</script>

<style lang="scss" scoped>
.products{
    display: grid;
        grid-template-columns: repeat(4, 1fr);

    gap: 20px;
    margin-bottom: 64px;
    &-container{
        padding: 0 80px;

        margin-bottom: 56px;
        @media screen and (max-width: 768px) {
    padding: 0 24px;


}
    }
    &-btn{
        margin: 0 auto;
    }
    @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);


}

}

</style>