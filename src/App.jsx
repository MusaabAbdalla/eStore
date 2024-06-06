import { useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import Home from './routes/home'
import ContactPage from './routes/contact'
import Product from './routes/product'
import Cart from './routes/cart'
import CheckoutSuccessPage from './routes/checkoutSuccessPage'






function ProductWrapper(){
  const params = useParams()
  const {id} = params
  return(
    <Product id={id}/>
  )

}




function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="contact" element={<ContactPage/>}/>
          <Route path="product/:id" element={<ProductWrapper/>}/>
          <Route path="checkout" element={<Cart/>} />
          <Route path="checkout-success" element={<CheckoutSuccessPage/>} />

        </Route>
      </Routes>

    </>
  )
}

export default App
