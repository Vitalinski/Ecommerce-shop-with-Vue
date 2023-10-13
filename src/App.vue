<template>
<div class="container">
  <Header></Header>  
  <OverlayLoginForm></OverlayLoginForm>
  <router-view></router-view>
  <Footer></Footer>

</div>
</template>

<script setup>
import OverlayLoginForm from './components/OverlayLoginForm.vue';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
</script>

<style lang="scss" >
@import 'src/assets/styles/main.scss'

</style>