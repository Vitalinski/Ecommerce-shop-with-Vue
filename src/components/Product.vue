<template>
  <div class="product">
    <router-link :to="`/products/${id}`">
        <img class="product-image" :src="img" :alt="title">
    </router-link>
    <router-link :to="`/products/${id}`" class="product-name">{{ title }}</router-link>
    <span class="product-price"> £{{ price }}</span>
  </div>
</template>

<script>
export default {
    props:{
      id:{
        type:Number,
        requaired:true
    },
    img:{
        type:String,
        requaired:true
    },
    title:{
        type:String,
        requaired:true
    },
    price:{
        type:String,
        requaired:true
    },
}
}
</script>

<style lang="scss" scoped>
.product{
  &-image{
   display: block;
   margin-bottom: 24px;

  }  
  &-name{
display: block;
color: var(--primary);
font-size: 20px;
line-height: 28px;
font-family: var(--clash);
margin-bottom: 8px;


  }
  &-price{
    display: block;
    color: var(--primary);
    font-size: 18px;

  }
}

</style>