import React, { useEffect, useState } from 'react'
import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs'
import { HeaderContainer, ShoppingCart } from './styles'

export const Header = ({ cartTotalProducts, productName }) => {
  const [products, setProducts] = useState(0)
  const [totalProducts, setTotalProducts] = useState(0)
  useEffect(() => {
    setProducts(cartTotalProducts)
    const total = products + totalProducts
    setTotalProducts(total)
  }, [cartTotalProducts])
  return (
    <HeaderContainer>
      <h3>Movil Market</h3>
      <Breadcrumbs currentPath={productName} />
      <div>
        <ShoppingCart />
        {cartTotalProducts === 0 ? '' : totalProducts}
      </div>
    </HeaderContainer>
  )
}
