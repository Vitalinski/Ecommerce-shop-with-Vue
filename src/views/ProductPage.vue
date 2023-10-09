<template>
 <ProductDetails :product="currentProduct"></ProductDetails>
 <ProductsLine showLikeText="true"></ProductsLine>
<AboutBrand></AboutBrand>


</template>

<script setup>
import { ref , watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductsStore } from "../store/store";
import ProductDetails from '../components/ProductDetails.vue';
import Footer from '../components/layout/Footer.vue';
import Header from '../components/layout/Header.vue';
import ProductsLine from '../components/ProductsLine.vue';
import AboutBrand from '../components/AboutBrand.vue';

const store = useProductsStore()
const products = store.products 
const route = useRoute();
const router = useRouter();
let productId = ref(route.params.id)
let currentProduct = ref( products[productId.value])
function onRouteIdChange(newId) {
  productId.value = newId;
  currentProduct.value = products[productId.value];
}
watch(() => route.params.id, onRouteIdChange);
</script>

<style>

</style>