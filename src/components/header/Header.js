import React, { useEffect, useState } from 'react'
import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs'
import { HeaderContainer, ShoppingCart } from './styles'

export const Header = ({ cartTotalProducts }) => {
  const [totalProducts, setTotalProducts] = useState(0)

  const products = localStorage.getItem('total Products') || []
  useEffect(() => {
    setTotalProducts(products.length)
    console.log(totalProducts)
  }, [cartTotalProducts])
  return (
    <HeaderContainer>
      <h3>Movil Market</h3>
      <Breadcrumbs currentPath='hahaha' />
      <ShoppingCart />
      {cartTotalProducts}
    </HeaderContainer>
  )
}
