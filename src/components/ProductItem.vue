<template>
  <div class='product-item'>
    <slider-section :prod="product"></slider-section>
    <div class="right-section">
    <p><b>{{ product.title}}</b></p>
    <p>{{ product.description}}</p>
    <p><b>{{ product.price}} EUR</b></p>

    <select id="sizes" v-model="selectedSize">
      <option value="">Choose size</option>
      <option v-for="size in sizeSelector" :value="size.value">{{ size.title }}</option>
    </select>
        <p><button v-if= "butt == 'Add to bag'" type="button" class="btn" v-on:click="addToCart()">{{ butt }}</button><p>
        <router-link v-if="butt == 'proceed'" to="/cart"><button class="btn">{{ butt }}</button></router-link>
        <br>
        <div v-if="butt == 'proceed'" class="counter">
        <router-link to="/cart">
        <img src="static/img/cart.png" alt="" />
        <p>{{ countInCart }}</p>
        </router-link>
                
        </div>
        {{ msg }} 

    </div> 
  </div>
</template>

<script>
import Slider from './Slider'
export default {
  name: 'productItem',
  data(){
    return {
      product: Products[this.$route.params.key],
      sizeSelector: [],
      selectedSize: '',
      butt: 'Add to bag',
      msg: ''
    }
  },
    components:{
    'slider-section': Slider
  },
  created(){
    this.getSizes();
  },
  computed:{
    countInCart(){
      if (localStorage['cart']){
        var cart = JSON.parse(localStorage['cart'])
        var length = 0
        for( var key in cart ) {
          if( cart.hasOwnProperty(key) ) {
            ++length;
          }
        }
      }
      return length
    }
  },
  methods: {
      getSizes: function(){
      var self = this;
      var sizes = []
      this.product.size.forEach(function(el){
        if(el == 's')
        {
          sizes.push({value: 's', title: 'S'})
        }
        if(el == 'm')
        {
          sizes.push({value: 'm', title: 'M'})
        }
        if(el == 'l')
        {
          sizes.push({value: 'l', title: 'L'})
        }
        if(el == 'xl')
        {
          sizes.push({value: 'xl', title: 'XL'})
        }
        self.sizeSelector = sizes  
      })
    },
    addToCart: function() {
    var self = this
      if(this.selectedSize != '')
      {
        if(localStorage['cart'])
        {
          var cart = JSON.parse(localStorage['cart'])
          if(cart.hasOwnProperty(self.product.code+this.selectedSize))
          {
            this.msg = 'Already in bag'
            return
          }
        }
        else
        {
          var cart = {}
        }
          var item = {};
          item.title = this.product.title
          item.description = this.product.description
          item.price = this.product.price
          item.img = this.product.image[0]
          item.size = this.selectedSize
          item.count = 1
          item.code = this.product.code
          cart[item.code+this.selectedSize] = item
          localStorage['cart'] = JSON.stringify(cart)
          this.butt = 'proceed'
      }
    }
  }

}
</script>

<style>
.counter{
  margin-top: 110px;
  width: 100px;
  display:inline-block;   
  position:relative;
}

.counter img{
  width: 80%;
}
.counter p{
  font-weight: bold;
  display: inline-block;
  position:absolute;
  bottom: 24px;
  left: 31px;
}
 .slider{
   float: left;
   width: 400px;
   height: 500px;
  }
  .right-section{
    float:right;
    text-align: center;
    width: 700px;
  }
</style>
