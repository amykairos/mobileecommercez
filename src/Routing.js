import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductList } from './components/productList/ProductList'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ProductList} />
      </Routes>
      <Routes />
    </BrowserRouter>

  )
}
