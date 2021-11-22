import React from 'react'

export const OptionsProduct = ({ colors, storages, setCodeColor, setCodeStorage, setSelected }) => {
  const handleClick = () => {
    setSelected(true)
  }
  const handleChange = (event) => {
    if (event.target.id === 'memory') {
      setCodeStorage(event.target.value)
    }
    if (event.target.id === 'color') {
      setCodeColor(event.target.value)
    }
  }

  return (
    <>
      <select id='color' onChange={handleChange}>
        {colors?.map((color, index) => <option key={index} value={color.code}>{color.name}</option>)}
      </select>
      <select id='memory' onChange={handleChange}>
        {storages?.map((item, index) => <option key={index} value={item.code}>{item.name}</option>)}
      </select>
      <button onClick={handleClick}>Añadir</button>
    </>
  )
}
