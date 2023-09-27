<template>
  <div class="cover-image">
    <InformationBlock :title="title" :description="description" :link="link"></InformationBlock>

</div>
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

   
}
</style>