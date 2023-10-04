<template>
  <div class="about-brand">
    <h3 class="about-brand__title">What makes our brand different</h3>
    <div class="about-brand-elements">
        <div class="about-brand-element"
        v-for="(element,i) of aboutBrands" :key="i">
            <img class="about-brand-element__img" :src="element.img" alt="Icon">
            <h4 class="about-brand-element__title">{{ element.title }}</h4>
            <span class="about-brand-element__description">{{ element.description }}</span>

        </div>
    </div>
  </div>
</template>

<script setup>
const aboutBrands=[{
    img:'/svg/about-brand-delivery.svg',
    title:'Next day as standard',
    description:'Order before 3pm and get your order the next day as standard',

},
{
    img:'/svg/about-brand-checkmark.svg',
    title:'Made by true artisans',
    description:'Handmade crafted goods made with real passion and craftmanship',

},
{
    img:'/svg/about-brand-purchase.svg',
    title:'Unbeatable prices',
    description:'For our materials and quality you won’t find better prices anywhere',

},
{
    img:'/svg/about-brand-sprout.svg',
    title:'Recycled packaging',
    description:'We use 100% recycled to ensure our footprint is more manageable',

},
]
</script>

<style lang="scss" scoped>
.about-brand{
    padding: 80px 80px 130px 80px;
    &__title{
text-align: center;
font-size: 24px;
color: #2A254B;
font-family: 'var(--clash)';
margin-bottom: 36px;
@media screen and (max-width: 768px) {
    text-align: left;
font-size: 20px;

}
    }
    &-elements{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
gap: 20px;
@media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

}
@media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);

}
    }
    &-element{
        padding: 48px;
        background-color: #F9F9F9;
        @media screen and (max-width: 768px) {
padding: 36px 24px;
}
        &__img{
            display: block;
            margin-bottom: 12px;
        }
        &__title{
            margin: 0 0 12px  0;
            color: #2A254B;
            font-size: 20px;
            font-family: 'var(--clash)';
        }
        &__description{
            line-height: 1.5;
        }
    }

    @media screen and (max-width: 768px) {
    padding: 24px ;


}

}
</style>