<template>
  <header class="header">
    <div class="header-top">
<div class="header-top-search">
  <img src="public/svg/header-search.svg" alt="Search">
</div>
<div>
  <router-link class="header-logo" to="/">Avion</router-link>
</div>

<div class="header-top-right">
<div class="header-top-right__cart">
  <router-link to="/">
    <img src="public/svg/header-shopping--cart.svg" alt="Shopping cart">
  </router-link>
</div>
<div class="header-top-right__user">
  <router-link to="/">
    <img src="public/svg/header-user--avatar.svg" alt="Shopping cart">
  </router-link>
</div>
</div>
    </div>
    <div class="header-menu">
      <router-link class="header-menu__link"
       to="/"
      v-for="(element, i) of menu"
      :key="i">{{ element.name }}</router-link>
    </div>
  </header>
</template>

<script setup>
import{ref} from "vue"
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
</script>

<style lang="scss" scoped>
.header{
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
    &-right{
      display: flex;
      justify-content: flex-end;
      &__cart{
        margin-right: 16px;
      }
    }
  }
  &-logo{
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    color: var(--black);
  }
  &-logo:hover{
    text-decoration: underline;
  }
  &-menu{
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__link{
      text-decoration: none;
      margin: 0 23px;
      color: #726e8d;
    }
    &__link:hover{
      text-decoration: underline;
    }
  }
}
img:hover{
  cursor: pointer;
scale: 1.3;  }
  
</style>