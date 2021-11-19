import React, { useState } from 'react'
import { Routing } from './Routing'
import { Header } from './components/header/Header'

import { ProductList } from './components/productList/ProductList'
import { Product } from './components/product/Product'

function App () {
  const [totalProducts, setTotalProducts] = useState(0)
  return (
    <>
      <Routing />
      <Header cartTotalProducts={totalProducts} />
      <Product setTotalProducts={setTotalProducts} />
      <ProductList />
    </>
  )
}

export default App
