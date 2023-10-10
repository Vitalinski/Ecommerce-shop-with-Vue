<template>
  <div class="background">
    <h2 class="background__text">All products</h2>
  </div>
  <div class="content">
    <sidebar>
      <div class="content-filter" v-for="(filterType, i) of filter" :key="i">
        <div class="content-filter__title">{{ filterType.title }}</div>

        <div  v-for="(option,i) of filterType.options" :key="i">
          <div class="content-filter__option">
            <input type="checkbox" value="" id="" :checked="option.isChecked" />{{ option.name }}
        </div>
        </div>
      </div>
    </sidebar>

    <div class="content-collection">
      <div class="content-collection__products">
        <Product
          v-for="product of products"
          :key="product.id"
          :img="product.img"
          :title="product.title"
          :price="product.price"
          :id="product.id"
        ></Product>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from "../store/store";
import { ref } from "vue";
import Product from "../components/Product.vue";

const store = useProductsStore();
const products = ref(store.products);
const filter =[
    {
        title:'Product type',
        options:[{
            name:'All',
            isChecked:true
        },
        {
            name:'Chairs',
            isChecked:false
        },
        {
            name:'Stools',
            isChecked:false
        },
        {
            name:'Vases',
            isChecked:false
        },
        {
            name:'Lamps',
            isChecked:false
        },

    ]
    },
    {
        title:'Price',
        options:[{
            name:'All',
            isChecked:true
        },
        {
            name:'0-100',
            isChecked:false
        },
        {
            name:'101-250',
            isChecked:false
        },
        {
            name:'250+',
            isChecked:false
        },
    ]
    },
    {
        title:'Designer',
        options:[{
            name:'All',
            isChecked:true
        },
        {
            name:'Robert Smith',
            isChecked:false
        },
        {
            name:'Liam Gallagher',
            isChecked:false
        },
        {
            name:'Biggie Smalls',
            isChecked:false
        },
        {
            name:'Thom Yorke',
            isChecked:false
        },
    ]
    },

]
</script>

<style lang="scss" scoped>
.background {
  height: 210px;
  background: url("img/all-products-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  &__text {
    display: block;
    color: white;
    font-size: 36px;
    font-family: var(--clash);
    padding: 124px 0 80px 36px;
  }
}

.content {
  display: grid;
  grid-template-columns: 30% 1fr;
  &-filter {
    padding: 48px 0 0 80px;
    &__title{
font-family: var(--clash);
margin-bottom: 20px;
    }
    &__option{
margin-bottom: 12px;
    }
  }
  &-collection {
    &__products {
      margin: 36px 78px 32px 20px;
      gap: 20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

  }
}
</style>