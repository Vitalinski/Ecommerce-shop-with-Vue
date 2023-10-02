<template>
  <button :class="{'mobile-width':mobileWidth}" :style="{color:color, background:background}" class="btn">{{ text }}</button> 

</template>

<script>
export default {
 
props:{
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
    white-space: nowrap;
        display: block;
        line-height: 24px;
        border: none;
        padding: 16px 32px;
        &:hover{
            outline: 1px solid grey;
        }
      
    }
    .mobile-width{
        min-width: 100%;

    }
</style>