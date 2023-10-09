<template>
  <div class="product">
    <div>
      <img class="product-img" :src="product.img" :alt="product.title" />
    </div>
    <div>
      <h2 class="product-title">{{ product.title }}</h2>
      <div class="product-price">£{{ product.price }}</div>

      <div class="product-description">
        <div class="product-description__title">Product description</div>
        <div class="product-description__text">{{ product.description }}</div>
      </div>
      <div class="product-dimensions">
        <div class="product-dimensions__title">Dimensions</div>
        <div class="product-params">
          <div>
            <div class="product-params__param">Heigth</div>
            <div>{{ product.height }}</div>
          </div>
          <div>
            <div class="product-params__param">Width</div>
            <div>{{ product.width }}</div>
          </div>
          <div>
            <div class="product-params__param">Depth</div>
            <div>{{ product.depth }}</div>
          </div>
        </div>
      </div>
      <div class="product-quantity">
        <div class="product-quantity__text">Quantity</div>
        <div class="product-quantity__counter">
          <button class="product-quantity__counter-button" @click="decrease">
            -
          </button>
          <span>{{ quantity }}</span>
          <button class="product-quantity__counter-button" @click="quantity++">
            +
          </button>
        </div>
      </div>
      <Button
        mobileWidth="true"
        @click="addProduct"
        text="Add to cart"
        background="#2A254B"
        color="#fff"
      ></Button>
      <div class="product-already" v-if="alreadyAddedText">
        This product has already been added to your cart
      </div>
      <div class="product-success" v-if="productAddedText">This product added successfully</div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Button from "./Button.vue";
import { useProductsStore } from "../store/store";
const store = useProductsStore();
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
let quantity = ref(1);
let alreadyAddedText = ref(false);
let productAddedText = ref(false);

watch(
  () => props.product,
  () => {
    quantity.value = 1;
    alreadyAddedText.value = false;
    productAddedText.value = false;
  }
);
function decrease() {
  if (quantity.value > 1) {
    quantity.value--;
  }
}
function addProduct() {
  let currentProduct = props.product;
  if (store.cart[currentProduct.id]) {
    productAddedText.value = false;
    alreadyAddedText.value = true
  } else {
    store.addToCart(currentProduct, quantity.value);
    productAddedText.value = true;
    store.calculateSubtotal()

  }
  quantity.value = 1;
}
</script>

<style lang="scss" scoped>
.product {
  color: var(--primary);
  background-color: #f9f9f9;
  padding: 50px 80px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 65px;
  @media screen and (max-width: 768px) {
    display: block;
  }
  &-img {
    height: 660px;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      height: auto;
      display: block;
      margin: 0 auto 32px auto;
    }
  }
  &-title {
    margin-top: -20px;
    font-size: 36px;
    font-family: var(--clash);
    margin-bottom: 16px;
  }
  &-price {
    font-size: 24px;
    margin-bottom: 28px;
  }
  &-description {
    border-top: 1px #ebe8f4 solid;
    padding-top: 24px;
    &__title {
      margin-bottom: 14px;
      font-family: var(--clash);
    }
    &__text {
      margin-bottom: 36px;
    }
  }
  &-dimensions {
    &__title {
      margin-bottom: 24px;
    }
  }
  &-params {
    max-width: 70%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    &__param {
      margin-bottom: 15px;
    }
  }
  &-quantity {
    margin-bottom: 48px;
    @media screen and (max-width: 768px) {
      margin-bottom: 24px;
    }
    &__text {
      margin-bottom: 12px;
    }
    &__counter {
      width: 120px;
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
  &-already{
    color:red; 
    position: absolute;
  }
  &-success{
    color:green; 
    position: absolute;
  }
}
</style>