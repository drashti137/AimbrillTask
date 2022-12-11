import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Product from './Products/AddProduct'
import Productlist from './Products/Productlist'
import './App.css'

const Header1 = () => {
  return (
    <div className='header'>
      <BrowserRouter>
        <Link to='/' className='links'>Home</Link>
        <Link to='/Productlist' className='links'>View Product</Link>

        <Routes>
          <Route path='/' element={<Product />}></Route>
          <Route path="AddProduct" element={<Product />}></Route>
          <Route path="Productlist" element={<Productlist />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Header1
