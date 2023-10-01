<template>
    <div class="container">
  <Header></Header>  
  <CoverImage></CoverImage>
  <AboutBrand></AboutBrand>
  <ProductsLine></ProductsLine>
  <Ideas></Ideas>
  <subscribe></subscribe>
  <Footer></Footer>
  </div>
  </template>
  
  <script setup>
  import Header from '@/components/layout/Header.vue';
  import CoverImage from '@/components/CoverImage.vue';
  import AboutBrand from '@/components/AboutBrand.vue';
  import ProductsLine from '@/components/ProductsLine.vue';
  import Ideas from '@/components/Ideas.vue';
  import Subscribe from '../components/Subscribe.vue';
  import Footer from '../components/layout/Footer.vue';
  </script>
  
  <style lang="scss" >
  @import 'src/assets/styles/main.scss'
  
  </style>