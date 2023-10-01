<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-menu">
        <div class="footer-columns">
          <div class="footer-columns__column">
            <span class="footer-columns__title">Menu</span>
            <router-link class="footer-columns__link" to="/">New arrivals</router-link>
            <router-link class="footer-columns__link" to="/">Best sellers</router-link>
            <router-link class="footer-columns__link" to="/">Recently viewed</router-link>
            <router-link class="footer-columns__link" to="/">Popular this week</router-link>
            <router-link class="footer-columns__link" to="/">All products</router-link>

          </div>
          <div class="footer-columns__column">
            <span class="footer-columns__title">Categories</span>
            <router-link class="footer-columns__link" to="/">Crockery</router-link>
            <router-link class="footer-columns__link" to="/">Furniture</router-link>
            <router-link class="footer-columns__link" to="/">Homeware</router-link>
            <router-link class="footer-columns__link" to="/">Plant pots</router-link>
            <router-link class="footer-columns__link" to="/">Chairs</router-link>


          </div>
          <div class="footer-columns__column">
            <span class="footer-columns__title">Our company</span>
            <router-link class="footer-columns__link" to="/">About us</router-link>
            <router-link class="footer-columns__link" to="/">Vacancies</router-link>
            <router-link class="footer-columns__link" to="/">Contact us</router-link>
            <router-link class="footer-columns__link" to="/">Privacy</router-link>
            <router-link class="footer-columns__link" to="/">Returns policy</router-link>

          </div>
        </div>
        <div class="footer-subscribe">
          <div class="footer-subscribe__text">Join our mailing list</div>
          <SubscribeForm inputBackground="#F9F9F926" inputColor="white"></SubscribeForm>
        </div>
      </div>
      <div class="footer-social">
        <span class="footer-social-copyright">Copyright 2022 Avion LTD</span>
        <div class="footer-social-logos">
          <a href="#" class="footer-social-logos__link">
            <img src="public/svg/logo-facebook.svg" alt="Meta">
          </a>
          <a href="#" class="footer-social-logos__link">
            <img src="public/svg/logo-instagram.svg" alt="Instagram">
          </a>
          <a href="#" class="footer-social-logos__link">
            <img src="public/svg/logo-linkedin.svg" alt="Linkedin">
          </a>
          <a href="#" class="footer-social-logos__link">
            <img src="public/svg/logo-pinterest.svg" alt="Pinterest">
          </a>
          <a href="#" class="footer-social-logos__link">
            <img src="public/svg/logo-skype.svg" alt="Skype">
          </a>
          <a href="#" class="footer-social-logos__link">
            <img src="public/svg/logo-twitter.svg" alt="Twitter">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SubscribeForm from '../SubscribeForm.vue';
</script>

<style lang="scss" scoped>
.footer{

    background-color: var(--primary);
    color: white;
    &-content{
        padding: 50px 82px 25px 82px;
    }
    &-menu{
      display: grid;
      grid-template-columns: 540px 1fr;
      column-gap: 110px;
      border-bottom: 1px solid #4E4D93;
    }
    &-columns{
      display: grid;
      grid-template-columns: repeat(3, 1fr );
      margin-bottom: 80px;
      &__title{
        display: block;
        margin-bottom: 12px;
  
      }
      &__link{
        display: block;
        color: white;
        font-size: 14px;
        text-decoration: none;
        margin-bottom: 12px;
        &:last-child{
          margin-bottom: 0;
        }
        &:hover{
text-decoration: underline;
        }

      }
    }
    &-subscribe__text{
      margin-bottom: 16px;
    }
    &-social{
      padding-top: 22px;
      display: flex;
      justify-content: space-between;
      &-copyright{
        font-size: 14px;
      }
      &-logos{
        display: flex;
        align-items: center;
&__link{
  margin: 0 12px;
  &:hover{
scale: 1.3;  }
}        
      }
    }
}
</style>