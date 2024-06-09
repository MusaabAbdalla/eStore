import { Link } from "react-router-dom"
import CartIcon from "./CartIcon"
import logo from "../assets/estore.png"

function Nav() {
    return (

      <header className="p-4 bg-violet-500 text-white">
        <div className="container flex justify-between h-16 mx-auto">
          <Link to="/" className="flex items-center p-2">
            <img alt="estore logo" src={logo} className=" logo " />
          </Link>
          <ul className="items-stretch  space-x-3 flex" >
            <li className="flex">
              <Link to="/" className="flex items-center px-4 -mb-1  dark:border-">Home</Link>
            </li>
            <li className="flex">
              <Link to="contact" className="flex items-center px-4 -mb-1  dark:border-">Contact-Us</Link>
            </li>
            <li className="flex">
              <Link to="checkout" className="flex items-center px-4 -mb-1 dark:border-">
                <CartIcon />
                <span>Cart</span>
              </Link>
            </li>
          </ul>
        </div>
      </header>

    )
  }





  export default Nav
