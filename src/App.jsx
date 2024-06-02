import { useState } from 'react'
import { Route, Routes, Link, Outlet } from 'react-router-dom'
import './App.css'
import Home from './routes/home'
import ContactPage from './routes/contact'
import Example from './routes/example'



function Nav(){
  return(
    <div>
        <Link to="/">Home</Link>
        <Link to="contact">Contact-Us</Link>
        <Link to="checkout">Cart</Link>
        <Link to="example">Example</Link>
    </div>
  )
}

function Header(){
  return(
    <div>
      <Nav/>
    </div>

  )
}
function Footer(){
  return(
    <div>
      <h5>This Is the Footer</h5>
    </div>
  )
}

function Layout(){
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}




function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="contact" element={<ContactPage/>}/>
          <Route path="example" element={<Example/>}/>
          {/* <Route path="product/:id" element={<ShowProduct/>} /> */}
        </Route>
      </Routes>

    </>
  )
}

export default App
