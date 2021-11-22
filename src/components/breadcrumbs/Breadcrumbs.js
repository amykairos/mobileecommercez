import React from 'react'
import { Link } from 'react-router-dom'
import { BreadcrumbContainer } from './styles'

export const Breadcrumbs = ({ currentPath }) => {
  return (
    <>
      <BreadcrumbContainer>
        <Link to='/'>Home</Link>
        {currentPath.length ? <span>{'>'}{currentPath}</span> : ''}
      </BreadcrumbContainer>
    </>
  )
}
