import React from 'react'
import { Header } from './components/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

function App () {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
