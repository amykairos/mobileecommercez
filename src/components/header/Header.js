import React from 'react'
import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs'

import { HeaderContainer, ShoppingCart } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <h3>Movil Market</h3>
      <Breadcrumbs currentPath='hahaha' />
      <ShoppingCart />
    </HeaderContainer>
  )
}
