<template>
  <Header></Header>
 <ProductDetails :product="currentProduct"></ProductDetails>
 <Footer></Footer>


</template>

<script setup>
import { ref , onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProductDetails from '../components/ProductDetails.vue';
import Footer from '../components/layout/Footer.vue';
import Header from '../components/layout/Header.vue';
import { useToDoStore } from "../store/store";

const store = useToDoStore()
const products = store.products 
const route = useRoute();
const router = useRouter();
let productId = ref('')
let currentProduct = ref({})
onMounted(()=>{
  productId.value= route.params.id
  currentProduct.value = products[productId.value]
} )
</script>

<style>

</style>