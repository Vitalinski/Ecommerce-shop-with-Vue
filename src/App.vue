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
import Header from './components/Header.vue';
import CoverImage from './components/CoverImage.vue';
import AboutBrand from './components/AboutBrand.vue';
import ProductsLine from './components/ProductsLine.vue';
import Ideas from './components/Ideas.vue';
</script>

<style lang="scss" >
@import url('https://fonts.cdnfonts.com/css/satoshi');

*{
  box-sizing: border-box;
  font-weight: 400;
  a{
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }


}
body{
  font-family: 'Satoshi', sans-serif;

  img{
    max-width: 100%;
  }
  font-size: 16px;
  margin: 0;
  padding: 0;

}
.container{
  max-width:1440px ;
  margin:auto;
}
</style>