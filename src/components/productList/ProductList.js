import React, { useEffect, useState } from 'react'
import { getProduct } from '../../services/services'
import { List, SearchContainer } from './styles'
import { Search } from '../search/Search'

export const ProductList = () => {
  const [list, setList] = useState([])
  const [filter, setFilter] = useState('')

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
      <SearchContainer>
        <Search setFilter={setFilter} />
      </SearchContainer>
      <div>
        <List>
          {list?.filter(product => !filter || product?.model.toLowerCase().startsWith(filter.toLowerCase()))
            .map(product => (
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
