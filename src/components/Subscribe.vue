<template>
  <div class="subscribe">
<div class="subscribe-content">
<h3 class="subscribe-title">Join the club and get the benefits</h3>
<span class="subscribe-description">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</span>
<div class="subscribe-benefits">
    <div class="subscribe-benefit">
    <img  class="subscribe-benefit__icon" src="/img/subscribe-check.jpg" >
    <span class="subscribe-benefit__name" >Exclusive offers</span>
</div>
<div class="subscribe-benefit">
    <img  class="subscribe-benefit__icon" src="/img/subscribe-check.jpg" >
    <span class="subscribe-benefit__name" >Free events</span>
</div>
<div class="subscribe-benefit">
    <img  class="subscribe-benefit__icon" src="/img/subscribe-check.jpg" >
    <span class="subscribe-benefit__name" >Large discounts</span>
</div>
</div>
<SubscribeForm btnBackground="#2A254B" btnColor="white"></SubscribeForm>

</div>
  </div>
</template>


<script setup>
import SubscribeForm from './SubscribeForm.vue';
</script>
<style lang="scss" scoped>
.subscribe{
background: url(/img/background-subscribe-image.jpg);
background-size: cover;
padding:96px 0 86px 0 ;
@media screen and (max-width: 768px) {
       padding: 0;
       background-position: 700px ;

}
&-content{
    max-width: 494px;
    margin: auto;
    text-align: center; 
    color: white;
    @media screen and (max-width: 768px) {
        text-align: left;
        padding: 24px;
}
}
&-title{
   display: block;
   margin: 0 0 12px 0 ;
   font-size: 32px;
   font-family: var(--clash);
   @media screen and (max-width: 768px) {
      font-size: 24px;
}
}
&-description{
font-size: 18px;
display: block;
margin-bottom: 30px;
@media screen and (max-width: 768px) {
      font-size: 14px;
}
}
&-benefits{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
@media screen and (max-width: 768px) {
    display: block;

}
}
&-benefit{
    display: flex;
    align-items: center;
     

    &:nth-child(2){
        margin: 0 36px;
        @media screen and (max-width: 768px) {
     margin: 8px 0 ;
}
    }
    &__icon{
margin-right: 9px;
    }
}

}
</style>