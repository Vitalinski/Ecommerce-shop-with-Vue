<template>
  <div class="cover-image">
    <InformationBlock :title="title" :description="description" :link="link"></InformationBlock>
</div>
<img class="mobile-image" src="public/img/hero.jpg" alt="Image">

</template>

<script setup>
import InformationBlock from "./InformationBlock.vue";

const title = 'Luxury homeware for people who love timeless design quality';
const description = 'Shop the new Spring 2022 collection today';
const link = ''
</script>

<style lang="scss" scoped>
.cover-image{
    background:url("public/img/hero.jpg");
    height: 704px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 80px;

   @media screen and (max-width: 768px) {
    height: auto;
    background: transparent;

    padding: 0px 24px 32px 24px ;
    

   }
}
.mobile-image{
height: 60vw;

  @media screen and (min-width: 769px) {
display: none;
    

   }
}
</style>