import { defineStore } from "pinia";
export const useToDoStore = defineStore("toDoStore", {
state:()=>({
     products:{
          1:{
          id: 1,
          img: "/img/photo1.jpg",
          title: "The Dandy chair",
          price: "£250",
          height:"110cm",
          width:"75cm",
          depth:"50cm",
          description:"A timeless design, crafted with meticulous attention to detail and using premium materials, defines our most popular and iconic furniture pieces. These exquisite creations seamlessly blend classic elegance with modern functionality, making them a perfect addition to any living space."
        },
        2:{
          id: 2,
          img: "/img/photo2.jpg",
          title: "Rustic Vase Set",
          price: "£155",
          height:"105cm",
          width:"45cm",
          depth:"30cm",
          description:"A timeless design, crafted with meticulous attention to detail and using premium materials, defines our most popular and iconic furniture pieces. These exquisite creations seamlessly blend classic elegance with modern functionality, making them a perfect addition to any living space."
        },
        3:{
          id: 3,
          img: "/img/photo3.jpg",
          title: "The Silky Vase",
          price: "£125",
          height:"125cm",
          width:"100cm",
          depth:"67cm",
          description:"A timeless design, crafted with meticulous attention to detail and using premium materials, defines our most popular and iconic furniture pieces. These exquisite creations seamlessly blend classic elegance with modern functionality, making them a perfect addition to any living space."
        },
        4:{
          id: 4,
          img: "/img/photo4.jpg",
          title: "The Lucy Lamp",
          price: "£399",
          height:"134cm",
          width:"70cm",
          depth:"25cm",
          description:"A timeless design, crafted with meticulous attention to detail and using premium materials, defines our most popular and iconic furniture pieces. These exquisite creations seamlessly blend classic elegance with modern functionality, making them a perfect addition to any living space."
        },
    },

})
})