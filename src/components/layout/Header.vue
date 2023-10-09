<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-search">
    <img src="/svg/header-search.svg" alt="Search">
  </div>
<div class="header-top-mobile">
  <div class="header-top-mobile__search">
    <img src="/svg/header-search.svg" alt="Search">
  </div>
  <div class="header-top-mobile__cart">
  <router-link to="/cart">
    <img src="/svg/header-shopping--cart.svg" alt="Shopping cart">
    <span v-if="Object.keys(cart).length" class="header-top-right__count">{{ Object.keys(cart).length }}</span>
  </router-link>
</div>
<div class="header-top-mobile__user">
  <router-link to="/">
    <img src="/svg/header-user--avatar.svg" alt="Shopping cart">
  </router-link>
</div>
  <div class="header-top-mobile__menu" @click="openMenu = !openMenu">
    <img src="/svg/menu.svg" alt="Menu" >
  </div>
</div>
<div>
  <router-link class="header-logo" to="/">Avion</router-link>
</div>

<div class="header-top-right">
<div class="header-top-right__cart">
  <router-link to="/cart">
    <img src="/svg/header-shopping--cart.svg" alt="Shopping cart">
    <span v-if="Object.keys(cart).length" class="header-top-right__count">{{ Object.keys(cart).length }}</span>
  </router-link>
</div>
<div class="header-top-right__user">
  <router-link to="/">
    <img src="/svg/header-user--avatar.svg" alt="Shopping cart">
  </router-link>
</div>
</div>
    </div>
    <div class="header-menu">
      <router-link class="header-menu__link"
      v-for="(element, i) of menu"
       :to="element.path"
      :key="i">{{ element.name }}</router-link>
    </div>
    <div class="header-menu-mobile" v-if="openMenu">
      <router-link class="header-menu-mobile__link"
      v-for="(element, i) of menu"
       :to="element.path"
      :key="i">{{ element.name }}</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useProductsStore } from '../../store/store';
const store = useProductsStore()
const cart = store.cart
const menu = [
  {
    name:'Plant pots',
    path:'/plant'
  },
  {
    name:'Ceramics',
    path:'/ceramics'
  },
  {
    name:'Tables',
    path:'/tables'
  },
  {
    name:'Chairs',
    path:'/chairs'
  },
  {
    name:'Crockery',
    path:'/crockery'
  },
  {
    name:'Tableware',
    path:'/tableware'
  },
  {
    name:'Cutlery',
    path:'/cutlery'
  }
]
let openMenu = ref(false)
</script>

<style lang="scss" scoped>
.header{
  position: relative;
  height: 132px;
  background: #fff;
  &-top{
    height: 70px;
    display: grid;
    grid-template-columns:repeat(3,1fr);
    justify-content:space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    margin: 0 28px;
    @media screen and (max-width: 768px) {
      display: flex;
    border: none;
    }
    &-right{
      display: flex;
      justify-content: flex-end;
      @media screen and (max-width: 768px) {
    display: none;
    }

      &__cart{
        margin-right: 16px;
        position: relative;
      }
      &__count{
        display: block;
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 10px;
        text-align: center;
        background-color: yellow;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        font-weight: bold;
      }
    }
    &-search{
      @media screen and (max-width: 768px) {
      display: none;
}
  }

  &-mobile{
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;           
order: 2;    
gap: 20px;
}
&__cart{
  position: relative;
}
  }

    }
  
  &-logo{
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    color: var(--black);
    @media screen and (max-width: 768px) {
order: 1;    }
  }
  &-logo:hover{
    text-decoration: underline;
  }
  &-menu{
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
    display: none;
    }
    &__link{
      text-decoration: none;
      margin: 0 23px;
      color: #726e8d;
    }
    &__link:hover{
      text-decoration: underline;
    }
   &-mobile{
    border: 1px solid grey;
    position: absolute;
    top: 48px;
    right: 10px;
    @media screen and (min-width: 769px) {
    display: none;
    }
    &__link{
      border: 1px solid grey;
      display: block;
      color: black;
      padding: 10px;
      text-decoration: none;
      font-weight: bold;
      background-color: white;
      transition: all 0.5s ease;
      &:hover{
        background-color: lightgrey;
        transition: all 0.5s ease;

      }
    }
   }
  }
}
img:hover{
  cursor: pointer;
scale: 1.3;  }
  
</style>