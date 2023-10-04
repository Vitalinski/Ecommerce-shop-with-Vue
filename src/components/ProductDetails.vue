<template>
  <div class="product">
    <div>
      <img :src="product.img" :alt="product.title" />
    </div>
    <div>
      <h2 class="product-title">{{ product.title }}</h2>
      <div class="product-price">{{ product.price }}</div>
   
    <div class="product-description">
      <div class="product-description__title">Product description</div>
      <div class="product-description__text">{{ product.description }}</div>
    </div>
    <div class="product-dimensions">
      <div class="product-dimensions__title">Dimensions</div>
      <div class="product-params">
<div>
  <div class="product-params__param">Heigth</div>
  <div>{{ product.height }}</div>
</div>
<div>
  <div class="product-params__param">Width</div>
  <div>{{ product.width }}</div>
</div>
<div>
  <div class="product-params__param">Depth</div>
  <div>{{ product.depth }}</div>
</div>
</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.product {
  color: var(--primary);
  background-color: #f9f9f9;
  padding: 50px 80px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 65px;
  &-title{
    font-size: 36px;
font-family: var(--clash);
margin-bottom: 16px;
  }
  &-price{
font-size: 24px;
margin-bottom:28px ;
  }
  &-description{
    border-top: 1px #EBE8F4 solid;
padding-top: 24px;
&__title{
margin-bottom: 14px;
font-family: var(--clash);

}
&__text{
  margin-bottom: 36px;
}
  }
  &-dimensions{

    &__title{
      margin-bottom: 24px;
    }
  }
  &-params{
    max-width: 70%;
    display: flex;
    justify-content: space-between;
  &__param{
    margin-bottom: 15px;
  }
  }
}
</style>