<template>
  <div class='product'>
    <h4><router-link :to="'/product/' + product.key">{{ product.title }}</router-link></h4>
    <p><img :src="product.image[0]" alt="" class="product-img"/></p>
    <p>{{product.description}} - <b>{{product.price}}</b></p>
  </div>
</template>

<script>
export default {
  name: 'productSection',
  props: ['product']
}
</script>
