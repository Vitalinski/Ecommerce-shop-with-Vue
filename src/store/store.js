import { defineStore } from "pinia";
export const useProductsStore = defineStore("productsStore", {
state:()=>({
     products:{
          1:{
          id: 1,
          img: "/img/photo1.jpg",
          title: "The Dandy chair",
          price: 150,
          height:"110cm",
          width:"75cm",
          depth:"50cm",
          description:"A timeless design, crafted with meticulous attention to detail and using premium materials, defines our most popular and iconic furniture pieces. These exquisite creations seamlessly blend classic elegance with modern functionality, making them a perfect addition to any living space.",
          cartDescription: 'A timeless design, crafted with attention to detail.'
        },
        2:{
          id: 2,
          img: "/img/photo2.jpg",
          title: "Rustic Vase Set",
          price: 155,
          height:"105cm",
          width:"45cm",
          depth:"30cm",
          description:"A timeless design, crafted with meticulous attention to detail and using premium materials, defines our most popular and iconic furniture pieces. These exquisite creations seamlessly blend classic elegance with modern functionality, making them a perfect addition to any living space.",
          cartDescription: 'A timeless design, crafted with attention to detail.'
        },
        3:{
          id: 3,
          img: "/img/photo3.jpg",
          title: "The Silky Vase",
          price: 125,
          height:"125cm",
          width:"100cm",
          depth:"67cm",
          description:"A timeless design, crafted with meticulous attention to detail and using premium materials, defines our most popular and iconic furniture pieces. These exquisite creations seamlessly blend classic elegance with modern functionality, making them a perfect addition to any living space.",
          cartDescription: 'A timeless design, crafted with attention to detail.'
        },
        4:{
          id: 4,
          img: "/img/photo4.jpg",
          title: "The Lucy Lamp",
          price: 399,
          height:"134cm",
          width:"70cm",
          depth:"25cm",
          description:"A timeless design, crafted with meticulous attention to detail and using premium materials, defines our most popular and iconic furniture pieces. These exquisite creations seamlessly blend classic elegance with modern functionality, making them a perfect addition to any living space.",
          cartDescription: 'A timeless design, crafted with attention to detail.'
        },
        5:{
          id: 5,
          img: "/img/photo5.jpg",
          title: "Decorative stool",
          price: 99,
          height:"54cm",
          width:"40cm",
          depth:"25cm",
          description:"A timeless design, crafted with meticulous attention to detail and using premium materials, defines our most popular and iconic furniture pieces. These exquisite creations seamlessly blend classic elegance with modern functionality, making them a perfect addition to any living space.",
          cartDescription: 'A timeless design, crafted with attention to detail.'
        },
        6:{
          id: 6,
          img: "/img/photo6.jpg",
          title: "Ultimate Design chair",
          price: 199,
          height:"134cm",
          width:"70cm",
          depth:"25cm",
          description:"A timeless design, crafted with meticulous attention to detail and using premium materials, defines our most popular and iconic furniture pieces. These exquisite creations seamlessly blend classic elegance with modern functionality, making them a perfect addition to any living space.",
          cartDescription: 'A timeless design, crafted with attention to detail.'
        },
        7:{
          id: 7,
          img: "/img/photo7.jpg",
          title: "Set Of Chairs",
          price: 259,
          height:"134cm",
          width:"70cm",
          depth:"25cm",
          description:"A timeless design, crafted with meticulous attention to detail and using premium materials, defines our most popular and iconic furniture pieces. These exquisite creations seamlessly blend classic elegance with modern functionality, making them a perfect addition to any living space.",
          cartDescription: 'A timeless design, crafted with attention to detail.'
        },
        8:{
          id: 8,
          img: "/img/photo8.jpg",
          title: "Winterfint Vase",
          price: 89,
          height:"54cm",
          width:"30cm",
          depth:"35cm",
          description:"A timeless design, crafted with meticulous attention to detail and using premium materials, defines our most popular and iconic furniture pieces. These exquisite creations seamlessly blend classic elegance with modern functionality, making them a perfect addition to any living space.",
          cartDescription: 'A timeless design, crafted with attention to detail.'
        },
        9:{
          id: 9,
          img: "/img/photo9.jpg",
          title: "The Pendent Lamps",
          price: 540,
          height:"134cm",
          width:"70cm",
          depth:"25cm",
          description:"A timeless design, crafted with meticulous attention to detail and using premium materials, defines our most popular and iconic furniture pieces. These exquisite creations seamlessly blend classic elegance with modern functionality, making them a perfect addition to any living space.",
          cartDescription: 'A timeless design, crafted with attention to detail.'
        },
    },

cart:{

},
subtotal:0,
isLoginActive:false,

}),
actions:{
  hideOverlay(){
    this.isLoginActive=false
  }, 
  showOverlay(){
    this.isLoginActive=true
  },
  addToCart(product, quantity){

this.cart[product.id]= product
this.cart[product.id].quantity=quantity
  },
  increaseQuantity(id){
    let product = this.cart[id]
    product.quantity++
  },
  decreaseQuantity(id){
    let product = this.cart[id]
    product.quantity>1?product.quantity--:delete this.cart[id]
  },
  calculateSubtotal(){
    let sum=0
    for(let productId of Object.keys(this.cart)){
      let product = this.cart[productId]
      sum+=product.quantity*product.price
    }
    this.subtotal=sum
  }
}
})
