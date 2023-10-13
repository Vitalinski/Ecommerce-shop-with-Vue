<template>
  <div v-if="store.isLoginActive" class="overlay">
    <form class="overlay-form animate" method="get">
      <div class="overlay-form-top">
        <span
          @click="store.hideOverlay"
          class="overlay-form-top__close"
          title="Close Modal"
          >&times;</span
        >
        <span class="overlay-form-top__logo">Avion</span>
      </div>

      <div class="overlay-form-container">
        <span>Username</span>
        <input type="text" placeholder="Enter Username" required />

        <span>Password</span>
        <input type="password" placeholder="Enter Password" required />

        <button type="submit">Login</button>
        <label> <input type="checkbox" checked="checked" /> Remember me </label>
      </div>

      <div class="overlay-form-bottom" >
        <button
          type="button"
          @click="store.hideOverlay"
          class="overlay-form-bottom__cancel"
        >
          Cancel
        </button>
        <span> <a href="#">Forgot password?</a></span>
      </div>
    </form>
  </div>
</template>
      
      <script setup>
      import {useProductsStore} from "@/store/store.js"
const store = useProductsStore()

</script>
      
      <style lang="scss" scoped>
.overlay {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  padding-top: 60px;

  &-form {
    background-color: #fefefe;
    margin: 5% auto 15% auto;
    border: 1px solid #888;
    width: 80%;
    max-width: 700px;
    animation: animatezoom 0.6s;

    &-top {
      text-align: center;
      margin: 24px 0 12px 0;
      position: relative;
      &__logo {
        font-size: 24px;
        font-weight: bold;
        color: var(--black);
      }
      &__close {
        position: absolute;
        right: 25px;
        top: 0;
        color: #000;
        font-size: 35px;
        font-weight: bold;

        &:hover,
        &:focus {
          color: red;
          cursor: pointer;
        }
      }
    }
    &-container {
      padding: 16px;
    }
    &-bottom {
      background-color: #f1f1f1;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__cancel {
        width: auto;
        padding: 10px 18px;
        background-color: #f44336;
      }
    }
  }
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #b99b63;
  font-size: 14px;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>