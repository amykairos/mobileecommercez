import React, { useEffect, useState } from 'react'
import { getProduct } from '../../services/services'
import { List, Search } from './styles'

export const ProductList = () => {
  const [list, setList] = useState([])

  useEffect(async () => {
    try {
      const productList = await getProduct()
      setList(productList)
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <div>
      <Search>
        <input type='text' />
      </Search>
      <div>
        <List>
          {list?.map(product => (
            <li key={product.id}>
              <h5>{product.model}</h5>
              <img src={product.imgUrl} alt={product.model} />
              <span>Descripción del artículo</span>
            </li>))}
        </List>
      </div>
    </div>
  )
}
