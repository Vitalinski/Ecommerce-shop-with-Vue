<template>
<div class="about">
    
      <div class="about-text">
        A brand built on the love of craftmanship, quality and outstanding customer
        service
      </div>
      <div class="about-history">
        <InformationBlock  :title="firstHistoryTitle" :description="firstHistoryDescription" 
         colorTitle="#2A254B" colorDescription="#505977" ></InformationBlock>
           <img class="about-history__img" src="/img/About-us-history1.jpg" alt="Image">
           <img class="about-history__img" src="/img/About-us-history2.jpg" alt="Image">
           <InformationBlock  :title="secondHistoryTitle" :description="secondHistoryDescription" 
         colorTitle="#2A254B" colorDescription="#505977" ></InformationBlock>
    </div>
</div>
  
  <AboutBrand></AboutBrand>
  <Subscribe></Subscribe>

</template>

<script setup>
import AboutBrand from "../components/AboutBrand.vue";
import Subscribe from "../components/Subscribe.vue";
import InformationBlock from "../components/InformationBlock.vue";

const firstHistoryTitle =`From a studio in London to a global brand with over  400 outlets`
const firstHistoryDescription =' When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.'
const secondHistoryTitle ='Our service isn’t just personal, it’s actually hyper personally exquisite'
const secondHistoryDescription ='When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.'
</script>

<style lang="scss" scoped>
.about{
    @media screen and (max-width:768px){
        padding: 20px;

} 
&-text{
    color: var(--primary);
    max-width: 704px;
    font-size: 36px;
    font-family: var(--clash);
    line-height: 50.40px;
    margin: 68px auto 76px auto;
    @media screen and (max-width:768px){
font-size: 32px;
line-height: 44.80px;
} 
}
&-history{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    @media screen and (max-width:768px){
    grid-template-columns: repeat(1,1fr);

    
}
&__img{
    
    height: 100%;
    @media screen and (max-width:768px){
max-height: 358px;
margin: 20px auto;

    
}
}
}
}
</style>