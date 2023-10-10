<template>
  <div :style="{background:background}" class="info">
<div class="info-text">
        <h2 :style="{color: colorTitle}" class="info__title">{{ title }}</h2>
        <span :style="{color: colorDescription}" class="info__description">{{ description }}</span>
</div>   
<div >
    <Button path="/products" mobileWidth="true" :color="btnColor" :background="btnBackground"></Button>
</div>
</div>
</template>

<script >
import Button from './Button.vue';
export default {
    components:{
Button
    },
props:{
    title:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:false
    },
   link :{
        type:String,
        required:false
    },
    colorTitle:{
        type:String,
        default: 'var(--black)',
        
    },
    colorDescription:{
        type:String,
        default: '#5B5676', 
    },
    background:{
        type:String,
        default:'#fff'
    },
    btnColor:{
        type:String,
        
    },
    btnBackground:{
        type:String,
    }
}
}
</script>

<style lang="scss" scoped>




    .info{
        max-width: 630px;
        padding: 50px 55px ;
        min-height: 444px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media screen and (max-width: 768px) {
            min-height: 0;

       padding: 0;     
   }
&__title{
    font-family: var(--clash);
    font-size: 32px;
    line-height: 1.5;
    margin: 0 0 20px 0;
}
&__description{
    @media screen and (max-width: 768px) {
        display: block;
         margin-bottom: 32px;   
   }
}
     
    }


</style>