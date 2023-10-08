<template>
  <div class="products-container">
      <div v-show="showLikeText" class="products-container-text">You might also like</div>

    <div class="products">

      <Product
        v-for="product of products"
        :key="product.id"
        :img="product.img"
        :title="product.title"
        :price="product.price"
        :id="product.id"
      ></Product>
    </div>
    <Button mobileWidth="true" class="products-btn"></Button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Product from "./Product.vue";
import Button from "./Button.vue";
import { useProductsStore } from "../store/store";
const props = defineProps({
  showLikeText:{
    type:String,
    default:false
  },
})
const store = useProductsStore()
const products = store.products 
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 20px;
  margin-bottom: 64px;
  &-container {
    padding: 0 80px;

    margin-bottom: 56px;
    @media screen and (max-width: 768px) {
      padding: 0 24px;
    }
    &-text{
      font-size: 32px;
      color:var(--primary);
      font-family: var(--clash);
      margin-top: 67px;
      margin-bottom: 33px;
    }
  }
  &-btn {
    margin: 0 auto;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>