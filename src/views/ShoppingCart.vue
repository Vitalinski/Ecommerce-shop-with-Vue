<template>
  <div class="cart" >
    <h2 class="cart-title">Your shopping cart <span v-show="Object.keys(cart).length===0">is empty</span></h2>
    <div v-if="Object.keys(cart).length">
        
        <div class="cart-headers">
          <span>Product</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>
        <div class="cart-products">
          <div class="product" v-for="product of cart" :key="product.id">
            <div class="product-card">
                
                <router-link :to="`/products/${product.id}`">
                  <img
                    class="product-card__image"
                    :src="product.img"
                    :alt="product.title"
                  />
                </router-link>
                <div class="product-card__text">
            <router-link :to="`/products/${product.id}`" class="product-card__title">{{ product.title }}</router-link>
            <div class="product-card__description">{{ product.cartDescription }} </div>
    <div class="product-card__price">£{{ product.price }}</div>
                </div>
    
            </div>
            <div class="product__counter">
              <button class="product__counter-button" @click="changeQuantity( $event, product.id)">
                {{ '-' }}
              </button>
              <span>{{ product.quantity }}</span>
              <button class="product__counter-button" @click="changeQuantity( $event, product.id)">
                {{ '+' }}
              </button>
            </div>
            <div class="product__total">£{{ product.price*product.quantity }}</div>
          </div>
        </div>
        <div class="cart-subtotal">
    <div class="cart-subtotal__title">Subtotal <span class="cart-subtotal__price">£{{ subtotal }}</span></div>
    <div class="cart-subtotal__text">Taxes and shipping are calculated at checkout</div>
    <Button  mobileWidth="true" text="Go to checkout"  color="white"  background="#2A254B"></Button>
        </div>
      </div>
    </div>
  <ProductsLine showLikeText="true"></ProductsLine>
</template>

<script setup>
import {  computed } from "vue";
import { useProductsStore } from "../store/store";
import Button from "../components/Button.vue";
import ProductsLine from '../components/ProductsLine.vue';
const store = useProductsStore();
const cart = store.cart;
const subtotal = computed(() => store.subtotal);

function changeQuantity(e, id){
    if(e.target.innerHTML == '+'){
        store.increaseQuantity(id)
    }
    else{
        store.decreaseQuantity(id)

    }
    store.calculateSubtotal()

}
</script>

<style lang="scss" scoped>
.cart {
  color: var(--primary);
  background-color: #f9f9f9;
  padding: 64px 188px;
  &-title {
    font-size: 36px;
    font-family: var(--clash);
    white-space: nowrap;
  }
  &-headers {
    display: flex;
    justify-content: space-between;
    font-family: var(--clash);
    font-size: 14px;
    margin-bottom: 12px;
  }
  &-products {
    border-top: 1px #ebe8f4 solid;
    border-bottom: 1px #ebe8f4 solid;
  }
  &-subtotal{

display: flex;
flex-direction: column;
align-items: end;
       &__price{
        
        font-size: 24px;
font-family: var(--clash);
color: var(--primary);
margin-left: 16px;
       } 
       &__title{
        color: #4E4D93;
font-size: 20px;
font-family: var(--clash);
margin: 32px 0 16px 0;
       }
       &__text{
        color: #4E4D93;
font-size: 14px;
margin-bottom: 16px;
       }
    }
}
.product{
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-card{
display: flex;
        &__image{
max-width: 110px;
max-height: 130px;
margin-right: 21px;
margin-top: 20px;
        }
        &__text{
max-width: 180px;
        }
        &__title{
            color: var(--primary);
            display: block;
font-size: 20px;
font-family: var(--clash);
margin-bottom: 8px;
margin-top: 32px;

        }
        &__description{
font-size: 14px;
line-height: 21px;
margin-bottom: 8px;

        }
 


    }
    &__total{
        }
    &__counter {
        margin-left: -240px;
      width: 120px;
      height: 48px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      &-button {
        border: none;
        background-color: #fff;
        padding: 12px 16px;

        &:hover {
          background-color: lightgray;
        }
        &:active {
          scale: 0.8;
        }
      }
    }
  
  }

</style>