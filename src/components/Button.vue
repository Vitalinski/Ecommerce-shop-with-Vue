<template>
      <router-link :to="path">

  <button :class="{'mobile-width':mobileWidth}" :style="{color:color, background:background}" class="btn">{{ text }}</button> 
      </router-link>
</template>

<script>
export default {
 
props:{
    path:{
type:String,
default:''
    },
    mobileWidth:{
        type:Boolean,
        default:false
    },
    text:{
        type:String,
        default:'View collection'
    },
  
    color:{
        type:String,
        default:'#2A254B'
    },
   background:{
        type:String,
        default:'#F9F9F9',
    },}}
</script>

<style lang="scss" scoped>
 .btn{
    margin: 0 auto;
    cursor: pointer;
    white-space: nowrap;
        display: block;
        line-height: 24px;
        border: none;
        padding: 16px 32px;
        &:hover{
            outline: 1px solid grey;
            opacity: 0.8;

        }
      
    }
    .mobile-width{
        @media screen and (max-width: 768px){
    min-width: 100%;
    
  }

    }
</style>