<template>
<div class="ideas">
 
      <InformationBlock class="information-block" :title="title" :description="description" :link="link"
       btnBackground="#F9F9F926" background="#2A254B" btnColor="white"
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

<style>
.ideas{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    height: 478px;
    column-gap: 16px;
    padding: 0 80px;
    margin-bottom: 60px;

}
.information-block{
    background-color: red;
}
.information-img{
    height: 100%;
    
}
</style>