import React from 'react'
import { Feature } from './styles'

export const DescriptionProduct = ({ data }) => {
  const { brand, model, price, ram, cpu, os, displayResolution, battery, primaryCamera, secondaryCamera, weight } = data
  return (
    <div>
      <Feature>Marca: {brand}</Feature>
      <Feature>Modelo: {model}</Feature>
      <Feature>Precio: {price}</Feature>
      <Feature>CPU: {cpu}</Feature>
      <Feature>RAM: {ram}</Feature>
      <Feature>Sistema operativo: {os}</Feature>
      <Feature>Resolución de pantalla: {displayResolution}</Feature>
      <Feature>Beteria: {battery}</Feature>
      <Feature>Cámara Principal: {primaryCamera}</Feature>
      <Feature>Cámara Secundaria: {secondaryCamera}</Feature>
      <Feature>Peso: {weight}</Feature>
    </div>
  )
}
