import React from 'react'

export const OptionsProduct = (data) => {
  console.log(data)
  const handleClick = () => {
  }
  return (
    <>
      <select id='color'>
        {data?.colors?.map((color, index) => <option key={index} value={color.name}>{color.name}</option>)}
      </select>
      <select id='memory'>
        {data?.storages.map((item, index) => <option key={index} value={item.name}>{item.name}</option>)}
      </select>
      <button onClick={handleClick}>Añadir</button>
    </>
  )
}
