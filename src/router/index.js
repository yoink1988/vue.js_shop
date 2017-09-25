import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList'
import ProductItem from '@/components/ProductItem'
import Cart from '@/components/Cart'
import Success from '@/components/Success'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/product/:key',
      name: 'productItem',
      component: ProductItem
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    }
  ]
})
