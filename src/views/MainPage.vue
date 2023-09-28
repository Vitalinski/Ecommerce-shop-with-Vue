<template>
    <div class="container">
  <Header></Header>  
  <CoverImage></CoverImage>
  <AboutBrand></AboutBrand>
  <ProductsLine></ProductsLine>
  <Ideas></Ideas>
  </div>
  </template>
  
  <script setup>
  import Header from '@/components/Header.vue';
  import CoverImage from '@/components/CoverImage.vue';
  import AboutBrand from '@/components/AboutBrand.vue';
  import ProductsLine from '@/components/ProductsLine.vue';
  import Ideas from '@/components/Ideas.vue';
  </script>
  
  <style lang="scss" >
  @import 'src/assets/styles/main.scss'
  
  </style>