import React, { useEffect, useState } from 'react'
import { getProduct } from '../../services/services'
import { List, SearchContainer } from './styles'
import { Search } from '../search/Search'
import { ThumbnailProduct } from '../thumbnail-product/ThumbnailProduct'

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
          {list?.filter(product => !filter || product?.model.toLowerCase().startsWith(filter.toLowerCase()) || product?.brand.toLowerCase().startsWith(filter.toLowerCase()))
            .map(product =>
              <ThumbnailProduct
                key={product.id}
                id={product.id}
                title={product.brand}
                subtitle={product.model}
                urlImage={product.imgUrl}
                price={product.price}
              />
            )}
        </List>
      </div>
    </div>
  )
}
