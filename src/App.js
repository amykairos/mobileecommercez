import React from 'react'
import { Routing } from './Routing'
import { Header } from './components/header/Header'

import './App.css'
import { ProductList } from './components/productList/ProductList'
import { Product } from './components/product/Product'

function App () {
  return (
    <>
      <Routing />
      <Header />
      <Product />
      <ProductList />
    </>
  )
}

export default App
