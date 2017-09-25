<template>
  <div class="filter_section">
    <div class="menu">
    <select id="category" v-model="category">
        <option value="">Category</option>
        <option v-for="category in options.categories" :value="category.value">{{ category.title }}</option>
    </select>
    <select id="sizes" v-model="size">
      <option value="">Sizes</option>
      <option v-for="size in options.sizes" :value="size.value">{{ size.title }}</option>
    </select>
    <select id="colors" v-model="color">
      <option value="">Colors</option>
      <option v-for="color in options.colors" :value="color.value">{{ color.title }}</option>
    </select>
    <select id="sort" v-model="sort">
      <option value="">Price Sort</option>
      <option v-for="sort in sortType" :value="sort.value">{{ sort.title }}</option>
    </select>
    <button @click="clearFilters" class="clear">Clear Filter</button>
    </div>
      <product-section v-for="product in filteredProducts" :product="product"></product-section>  
  </div>
</template>

<script>

import Product from './Product'
export default {
  name: 'product_list',
  data () {
    return {
      category: '',
      size: '',
      color: '',
      sort:'',
      sortType: [
        {
          value: 'asc',
          title: 'Price Up'          
        },
        {
          value: 'desc',
          title: 'Price Down'          
        }
        ],
      options: {
        categories: [
          {
            value: 't-shirt',
            title: 'Cool T-shirt'
          },
          {
            value: 'cap',
            title: 'Cap'
          },
          {
            value: 'Rubaha',
            title: 'Cool Rubaha'
          },
        ],
        colors: [
          {
            value: 'black',
            title: 'Black'
          },
          {
            value: 'blue',
            title: 'Blue'
          },
          {
            value: 'white',
            title: 'White'
          },
          {
            value: 'green',
            title: 'Green'
          }          
        ],
        sizes:[
          {
            value: 's',
            title: 'S'
          },
          {
            value: 'm',
            title: 'M'
          },
          {
            value: 'l',
            title: 'L'
          },
          {
            value: 'xl',
            title: 'XL'
          },
        ]
      },
    }
  },
  components: {
    'product-section': Product
  },
  created(){
    this.products = Products
  },
  computed: {
    filteredProducts() {
      var self = this
      var checkSize = (el) => {
          if (self.size=="" || el.size.indexOf(self.size) != -1){
          return true
        }
        return false
      }
      var checkCategory = (el) => {
        if (self.category=="" || el.category == self.category){
          return true
        }
        return false
      }
      var checkColor = (el) => {
          if (self.color=="" || el.color.indexOf(self.color) != -1){
          return true
        }
        return false
      }

      var test = this.products.filter((el,k)=> {
        el.key = k
        return checkSize(el) && checkCategory(el) && checkColor(el)
        })
      if(self.sort == 'asc'){
        return test.sort(function(a, b){
            return b.price - a.price
        })
      }
     else if(self.sort == 'desc'){
        return test.sort(function(a, b){
           return a.price - b.price
      })
      }
      else
      {
        return test
      }

      }
  },
  methods: {
    clearFilters: function(){
      this.category = '',
      this.size = '',
      this.color = '',
      this.sort = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
