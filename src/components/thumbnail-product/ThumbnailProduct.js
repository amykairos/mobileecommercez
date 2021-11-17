import React from 'react'

export const ThumbnailProduct = ({ title, subtitle, urlImage }) => {
  return (
    <li>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <img src={urlImage} alt={subtitle} />
      <p>Precio: {}</p>
      <span>Descripción del artículo</span>
    </li>
  )
}
