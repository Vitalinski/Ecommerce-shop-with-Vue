<template>
  <div class="product">
    <a href="#">
        <img class="product-image" :src="img" :alt="title">
    </a>
    <a href="#" class="product-name">{{ title }}</a>
    <span class="product-price"> {{ price }}</span>
  </div>
</template>

<script>
export default {
    props:{
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
color: #2A254B;
font-size: 20px;
line-height: 28px;
font-family: Clash Display;
margin-bottom: 8px;


  }
  &-price{
    display: block;
    color: #2A254B;
    font-size: 18px;

  }
}

</style>