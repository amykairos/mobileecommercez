import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductList } from './components/productList/ProductList'
import { Product } from './components/product/Product'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ProductList} />
        <Route path='/product' element={Product} />
      </Routes>
      <Routes />
    </BrowserRouter>

  )
}
