import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: aquamarine;
`
export const ShoppingCart = styled(FaShoppingCart)`
  color: red;
`
