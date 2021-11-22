import React, { useEffect, useState } from 'react'
import { addProduct, getProduct } from '../../services/services'
import { DescriptionProduct } from '../description-product/DescriptionProduct'
import { ProductContainer } from './styled'
import { OptionsProduct } from '../options-product/OptionsProduct'

export const Product = ({ setTotalProducts, setProductName }) => {
  const [productInfo, setProductInfo] = useState({})
  const [codeColor, setCodeColor] = useState('')
  const [color, setColor] = useState([])
  const [codeStorage, setCodeStorage] = useState('')
  const [storage, setStorage] = useState([])
  const [shopList, setShopList] = useState([])
  const [selected, setSelected] = useState(false)
  const afuego = 'ND1elEt4nqZrCeFflDUZ2'

  const cleanLocalStorage = (id) => {
    setTimeout(() => localStorage.removeItem(id), 3600000000)
  }

  useEffect(async () => {
    try {
      const productItem = await getProduct(afuego)
      setProductInfo(productItem)
      setProductName(productItem.model)
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
  }, [productInfo])

  useEffect(async () => {
    if (selected) {
      try {
        const body = {
          id: productInfo.id,
          colorCode: codeColor.toString(),
          storageCode: codeStorage.toString()
        }
        const response = await addProduct(body)
        setShopList([...shopList, response])
        setSelected(false)
      } catch (e) {
        console.error(e)
      }
    }
  }, [selected])

  useEffect(() => {
    const productPosition = shopList.length
    const objectSaved = shopList[(productPosition - 1)]
    setTotalProducts(productPosition)
    localStorage.setItem(productInfo.id, JSON.stringify(objectSaved))
    cleanLocalStorage(productInfo.id)
  }, [shopList])

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
