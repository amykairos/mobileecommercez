import React, { useEffect, useState } from 'react'
import { getProduct } from '../../services/services'
import { DescriptionProduct } from '../description-product/DescriptionProduct'
import { ProductContainer } from './styled'
import { OptionsProduct } from '../options-product/OptionsProduct'

export const Product = () => {
  const [productInfo, setProductInfo] = useState({})
  const afuego = 'ZmGrkLRPXOTpxsU4jjAcv'

  useEffect(async () => {
    try {
      const productItem = await getProduct(afuego)
      setProductInfo(productItem)
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <>
      <ProductContainer>
        <div>
          <img src={productInfo?.imgUrl} alt={productInfo?.model} />
        </div>
        <div>
          <div>
            <h3>Description</h3>
            <DescriptionProduct data={productInfo} />
          </div>
          <div>
            <h3>Actions</h3>
            <OptionsProduct
              data={productInfo?.options}
            />
          </div>
        </div>
      </ProductContainer>
    </>
  )
}
