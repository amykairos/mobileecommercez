import React from 'react'
import { Routing } from './Routing'
import { Header } from './components/header/Header'

import './App.css'
import { ProductList } from './components/productList/ProductList'

function App () {
  return (
    <>
      <Routing />
      <Header />
      <ProductList />

    </>
  )
}

export default App
