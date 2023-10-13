<template>
  <form class="subscribe-form">
    <input :style="{background: inputBackground, color:inputColor,}" class="subscribe-form__input" type="text" placeholder="your@email.com">
    <Button text="Sign up" @click="store.showOverlay"  :color=btnColor :background=btnBackground ></Button>
</form>
</template>

<script setup>
import Button from './Button.vue';
import { useProductsStore } from '../store/store';
const store = useProductsStore()
const props = defineProps({
    inputBackground:{
type:String,
    },
    inputColor:{
        type:String,
    },
    btnColor:{
        type:String,
        default:'#2A254B'
    },
    btnBackground:{
        type:String
    }
})
</script>

<style lang="scss" scoped>
.subscribe-form{
    display: flex;
    
    &__input{
        border: none;
        padding-left:  17px;
height: 56px;
flex-grow: 1;
min-width: 150px;
    }
}
</style>