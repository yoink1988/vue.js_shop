<template>
  <div class='cart'>
    <h3>Checkout</h3>
    <div class="prods">
    <prods v-for="prod in getProds" :product="prod"></prods>
    </div>
    <div class="right">
    <div class="calc">
      <label for="dis">Discount voucher:</label>
      <p><input type="text" class="dis" v-model="discountInput"/>
      <button @click="addDisc" class="add-disc">Submit</button></p>
      <p>Basket: {{summInBasket}} EUR</p>
      <p>Voucher Discount: {{discount}} {{discType}}</p>
      <p>Total price: {{priceWithDiscount}} EUR</p>
    </div>
    <div class="form">
      <label for="form">Your details</label>
      <p><input placeholder="First Name" v-model="user.name" type="text"/></p>
      <p><input placeholder="Last Name" v-model="user.lName" type="text"/></p>
      <p><input placeholder="Email" v-model="user.email" type="text"/></p>
      <p><input placeholder="Phone" v-model="user.phone" type="text"/></p>
      <p><input placeholder="Adress" v-model="user.adr" type="text"/></p>
      <p><button @click="order">Complete Purchase</button></p>
      <p><span>{{ errorName }}</span></p>
      <p><span> {{ errorLName }} </span></p>
      <p><span> {{ errorEmail }} </span></p>
    </div>
    </div>
  </div>
</template>

<script>


import ProductInCart from './ProdInCart.vue'
export default {
  name: 'cart',
  data(){
    return{
      updated: false,
      totalPriceUpdated: false,
      discountedUpdated: false,
      discountInput: '',
      discount: '',
      discType: '',
      errorName: '',
      errorLName: '',
      errorEmail: '',
      user: {
        name:'',
        lName:'',
        email:'',
        phone:'',
        adr:'',
      }
    }
  },
  created(){
    this.prods = JSON.parse(localStorage['cart'])
  },
  computed:{
    getProds() {
      if(!this.updated)
      {
        this.prods = JSON.parse(localStorage['cart'])
        this.updated = true
      }
    return this.prods
    },
    summInBasket(){
      if(!this.totalPriceUpdated){
      var prods = this.prods
      var summ = 0
      for (var prod in prods)
      {
        summ += prods[prod].price * prods[prod].count
      }
        this.totalPriceUpdated = true
        this.summInCart = summ
        return summ
      }
    },
    priceWithDiscount(){
      var price = this.summInCart
      if(!this.discountedUpdated){
        if(this.discount)
        {
          if(this.discType == 'EUR')
          {
            price -= this.discount
          }
          else if(this.discType == '%')
          {
            price -= price / 10
          } 
        }
      }
      this.discountedUpdated = true
      return price
    }

  },
  components:{
    'prods': ProductInCart
  },
  methods: {
      removeItem: function(codeSize) {
      var data = JSON.parse(localStorage['cart'])
      delete data[codeSize]
      localStorage['cart'] = JSON.stringify(data)
      this.updated = false
      this.totalPriceUpdated = false
      this.discountedUpdated = false
      },
      plusItem: function(codeSize){
      var data = JSON.parse(localStorage['cart'])
      data[codeSize].count++
      localStorage['cart'] = JSON.stringify(data)
      this.updated = false
      this.totalPriceUpdated = false
      this.discountedUpdated = false
      },
      minusItem: function(codeSize){
      var data = JSON.parse(localStorage['cart'])
      if(data[codeSize].count > 1){
        data[codeSize].count--
        localStorage['cart'] = JSON.stringify(data)
        this.updated = false 
        this.totalPriceUpdated = false
        this.discountedUpdated = false
        }
      },
      addDisc: function(){
        if(this.discountInput == 'disck10')
        {
          this.voucher = '10 %'
          this.discount = 10
          this.discType = '%'
        }
        else if(this.discountInput == 'disck5eur')
        {
          this.voucher = '5 EUR'
          this.discount = 5
          this.discType = 'EUR'
        }
        else{
          this.discount = ''
          this.discType = ''
        }
         this.discountInput = ''
         this.discountedUpdated = false
      },
      order: function(){
        var self = this
          var checkName = function()
          {
            if (self.user.name.search(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/) == -1)
            {
              self.errorName = 'check Name field'
              return false
            }
            self.errorName = ''
            return true
          }
          var checkLName = function()
          {
            if (self.user.lName.search(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/) == -1)
            {
              self.errorLName = 'check Last Name field'
              return false
            }
            self.errorLName = ''
            return true
          }
          var checkEmail = function()
          {
            if (self.user.email.search(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == -1)
            {
              self.errorEmail = 'check Email field'
              return false
            }
            self.errorEmail = ''
            return true
          }
          var cartNotEmpty = function()
          {
            if(Object.keys(localStorage['cart']).length === 2 )
            {
              return false
            }
            return true
          }

          if(cartNotEmpty() && checkName() && checkLName() && checkEmail())
          {
            var order = []
            var summ = self.priceWithDiscount
            var voucher = self.voucher
            var userName = self.user.name
            order.push(userName)
            order.push(summ)
            order.push(voucher)

            var prods = []
            for (var prod in self.prods)
            {
              prods.push(self.prods[prod])
            }
            order.push(prods)
            localStorage.clear();
            localStorage['order'] = JSON.stringify(order)
            window.location.href = '#/success'
          }
      
      }

  },
  
}
</script>
<style>
.prods{
  display: block;
  float: left;
  width: 800px;
}

.right{
  float: right;
  width: 300px;
}
.cart .form{
  border-top:1px black solid;
}

.prods .product{
  display: block;
  margin: 30px 20px 0 20px;
}
</style>

