import React from 'react'

export const Search = ({ setFilter }) => {
  const handleChange = (event) => setFilter(event.target.value)
  return (
    <>
      <input type='text' onChange={handleChange} />
    </>
  )
}
