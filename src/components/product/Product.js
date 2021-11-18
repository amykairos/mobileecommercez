import React, { useEffect, useState } from 'react'
import { getProduct } from '../../services/services'
import { DescriptionProduct } from '../description-product/DescriptionProduct'
import { ProductContainer } from './styled'
import { OptionsProduct } from '../options-product/OptionsProduct'

export const Product = (initialState) => {
  const [productInfo, setProductInfo] = useState({})
  const [codeColor, setCodeColor] = useState('')
  const [color, setColor] = useState([])
  const [codeStorage, setCodeStorage] = useState('')
  const [storage, setStorage] = useState([])
  const [selected, setSelected] = useState(false)
  const afuego = 'ZmGrkLRPXOTpxsU4jjAcv'

  useEffect(async () => {
    try {
      const productItem = await getProduct(afuego)
      setProductInfo(productItem)
    } catch (e) {
      console.error(e)
    }
  }, [])

  useEffect(() => {
    if (productInfo.options) {
      setCodeColor(productInfo.options.colors[0].code)
      setCodeStorage(productInfo.options.storages[0].code)
      setColor(productInfo.options.colors)
      setStorage(productInfo.options.storages)
    }
    console.log(codeColor, codeStorage, 'lamada')
  }, [productInfo])

  useEffect(() => {
    if (selected) {
      console.log(codeColor, codeStorage, 'selected')
    }
  }, [selected])

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
              colors={color}
              storages={storage}
              setCodeColor={setCodeColor}
              setCodeStorage={setCodeStorage}
              setSelected={setSelected}
            />
          </div>
        </div>
      </ProductContainer>
    </>
  )
}
