<template>
  <div :style="{background:background}" class="info">
<div class="info-text">
        <h2 :style="{color: colorTitle}" class="info__title">{{ title }}</h2>
        <span :style="{color: colorDescription}" class="info__description">{{ description }}</span>
</div>   
<div >
    <Button :color="btnColor" :background="btnBackground"></Button>
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
        default: '#22202E',
        
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
&__title{
    font-family: Clash Display;
    font-size: 32px;
    line-height: 1.5;
    margin: 0 0 20px 0;
}
&__description{
    
}
        &-link{
            color:#2a254b;
            text-decoration: none;
        }
        &-link:hover{
            text-decoration: underline;
        }
    }


</style>