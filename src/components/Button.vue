<template>
  <button :style="{color:color, background:background}" class="btn">{{ text }}</button> 

</template>

<script>
export default {
 
props:{
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
        display: block;
        line-height: 24px;
        border: none;
        padding: 16px 32px;
        &:hover{
            outline: 1px solid grey;
        }
    }
</style>