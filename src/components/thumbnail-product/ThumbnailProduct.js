import React from 'react'
import { Link } from 'react-router-dom'

export const ThumbnailProduct = ({ id, title, subtitle, urlImage, price }) => {
  return (
    <li>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <img src={urlImage} alt={subtitle} />
      <p>Precio: {price}</p>
      <Link to={`/${id}`}>Descripción del artículo</Link>
    </li>
  )
}
