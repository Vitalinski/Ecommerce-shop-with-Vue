<template>
  <button :style="{color:color, background:background}" class="btn">View collection</button> 

</template>

<script>
export default {
 
props:{
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