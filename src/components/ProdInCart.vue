<template>
  <div class='product'>
    <p><b>{{product.title}}</b></p>
    <p>Size: {{product.size}}</p>
    <p>{{product.price}} EUR</p>
    <p><img :src="product.img" alt=""/></p>
    <p><button v-on:click="plus(product.code+product.size)">+</button>{{product.count}}<button v-on:click="minus(product.code+product.size)">-</button></p>
    <p><button  v-on:click="del(product.code+product.size)">X</button></p>
  </div>
</template>

<script>
export default {
  name: 'product',
  props: ['product'],
  data(){
    return{
    }
  },
  created(){
    this.count = this.product.count

  },
  methods: {
    del: function(codeSize){
      this.$parent.removeItem(codeSize);
    },
    plus: function(codeSize){
      this.$parent.plusItem(codeSize);
    },
    minus: function(codeSize){
      this.$parent.minusItem(codeSize);
    }
  }
}
</script>

<style scoped>
.product button{
  margin:10px;
}

.product{
  border-top: 2px solid black;
}
</style>
