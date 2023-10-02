<template>
<div class="ideas">
 
      <InformationBlock class="information-block" :title="title" :description="description" :link="link"
       btnBackground="#F9F9F926" background="var(--primary)
" btnColor="white"
       colorTitle="white"  colorDescription="white"></InformationBlock>
       <img class="information-img" src="public/img/idea-image.jpg" alt="Image">
</div>
</template>

<script>
import InformationBlock from './InformationBlock.vue';


export default {
components:{
    InformationBlock,
},
data(){
    return{
 title : 'It started with a small idea',
 description : 'A global brand with local beginnings, our story begain in a small studio in South London in early 2014',
link : '',
    }
}
}
</script>

<style lang="scss" scoped>
.ideas{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 16px;
    padding: 0 80px;
    margin-bottom: 60px;
@media screen and (max-width:668px){
    grid-template-columns: repeat(1,1fr);
    padding: 0 24px;

    
}
}
.information-block{
    @media screen and (max-width:768px){
padding:32px;
    margin-bottom: 24px;
    height: 70vw;
    min-height: 350px;
    max-height: 500px;


} 
}
.information-img{
    height: 70vw;
    min-height: 350px;
    max-height: 500px;
    object-fit: cover;
    
}
</style>