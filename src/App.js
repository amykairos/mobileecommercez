import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header } from './components/header/Header'

import { ProductList } from './components/productList/ProductList'
import { Product } from './components/product/Product'

function App () {
  const [totalProducts, setTotalProducts] = useState(0)
  const [productName, setProductName] = useState('')
  return (
    <>
      <BrowserRouter>
        <Header cartTotalProducts={totalProducts} productName={productName} />
        <Switch>
          <Route path='/' exact>
            <ProductList />
          </Route>
          <Route path=':id'>
            <Product setTotalProducts={setTotalProducts} setProductName={setProductName} />
          </Route>
          <Route path='*'>
            <p>
              Esta no es una página valida
            </p>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
