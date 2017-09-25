<template>
  <div class='success'>
          <p>Thank You, {{data[0]}}!</p>
          
            Purchased:
          <div v-for="item in items">
            <div class="item">
              <p>{{item.count}} of {{item.description}}, {{item.size}} size, by {{item.price}} EUR</p>
            </div>
          </div>
          <p>Total price: {{data[1]}} EUR</p>
          <p>{{voucherString}}</p>
          <router-link to="/">Shop MORE!</router-link>
  </div>
</template>

<script>
import ProductInCart from './ProdInCart.vue'
export default {
  name: 'success',
  data(){
    return{
      data: [],
      voucherString: '',
      items: []
    }
  },
  created(){
    this.data = JSON.parse(localStorage['order'])
    this.getVoucherString()
    this.items = this.data[3]
    localStorage.clear()
  },
  methods: {
    getVoucherString: function(){
      if(this.data[2])
      {
        var voucher = this.data[2]
        this.voucherString = 'With discount of '+ voucher
      }
      else
      {
        this.voucherString = ''
      }
    }
  },
}
</script>

<style>
div {
  text-align: left;
}
</style>

