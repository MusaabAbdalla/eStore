import { Link } from "react-router-dom"
import CartIcon from "./CartIcon"
import logo from "../assets/estore.png"

function Nav() {
  return (
    // <div>
    //     <Link to="/">Home</Link>
    //     <Link to="contact">Contact-Us</Link>
    //     <Link to="checkout">
    //      <CartIcon/>
    //     <span>Cart</span>
    //     </Link>
    // </div>

    <header className="p-4 bg-violet-500 text-white">
      <div className="container flex justify-between h-16 mx-auto">
        <Link to="/" className="flex items-center p-2">
          <img alt="estore logo" src={logo} className=" logo " />
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link to="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Home</Link>
          </li>
          <li className="flex">
            <Link to="contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Contact-Us</Link>
          </li>
          <li className="flex">
            <Link to="checkout" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">
              <CartIcon />
              <span>Cart</span>
            </Link>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>

  )
}





export default Nav
