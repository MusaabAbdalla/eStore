import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "@/context/CartContext"
import emptyCart from "../assets/emptyCart.webp"


function Cart() {
  const { cart, dispatch } = useContext(CartContext)
  const navigate = useNavigate()
  const total = cart.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0)

  function handleCheckout() {
    dispatch({ type: "clearCart" })
    navigate("/checkout-success")
  }

  function incrementQuantity(id) {
    dispatch({ type: "incrementQuantity", payload: id })
  }

  function decrementQuantity(id) {
    dispatch({ type: "decrementQuantity", payload: id })
  }

  function removeFromCart(id) {
    dispatch({ type: "removeFromCart", payload: id })
  }




  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      {cart.length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold">Your cart</h2>
          <ul className="flex flex-col divide-y dark:divide-gray-300">
            {cart.map((item) => (

              <li key={item.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={item.image.url} alt={item.image.alt} />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">{item.title} </h3>
                        <div className="text-sm dark:text-gray-600">

                          {item.tags.map((tag) => (
                            <h2 className="text-sm title-font text-gray-500 tracking-widest" key={tag}>{tag}</h2>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        {item.discountedPrice === item.price ? (

                          <p className="text-lg font-semibold">{item.discountedPrice}</p>

                        ) : (
                          <div>
                            <p className="text-lg font-semibold">{item.discountedPrice}</p>
                            <p className="text-sm line-through text-red-700">{item.price}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex text-sm divide-x space-x-4">
                      <button onClick={() => removeFromCart(item.id)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                        <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                          <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                          <rect width="32" height="200" x="168" y="216"></rect>
                          <rect width="32" height="200" x="240" y="216"></rect>
                          <rect width="32" height="200" x="312" y="216"></rect>
                          <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>Remove</span>
                      </button>
                      <div className="flex justify-center sm:justify-start items-center space-x-2 mt-2">
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                        >
                          -
                        </button>
                        <span className="text-lg">{item.quantity}</span>
                        <button
                          onClick={() => incrementQuantity(item.id)}
                          className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                        >
                          +
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="space-y-1 text-right">
            <p>Total amount:
              <span className="font-semibold">{total}</span>
            </p>
            <p className="text-sm dark:text-gray-600">Not including taxes and shipping costs</p>
          </div>
          <div className="flex justify-end space-x-4">
            <button onClick={() => navigate("/")} type="button" className="px-6 py-2 border rounded-md text-white bg-violet-600">
              <span className="sr-only sm:not-sr-only">Continue Shopping</span>
            </button>
            <button onClick={() => handleCheckout()} type="button" className="px-6 py-2 border rounded-md text-white bg-violet-600 dark:text-gray-50 dark:border-violet-600">
              <span className="sr-only sm:not-sr-only">Checkout</span>
            </button>
          </div>
        </div>

      ) : (
        <div>
            <img alt="empty cart image" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded mx-auto m" src={emptyCart} />
          <p className="text-center text-rose-700 text-3xl mt-3">Oops! Your cart is currently empty!</p>
          <p className="text-center text-violet-700 text-2xl mt-6">Looks you have not added <br/> anything to your cart yet</p>
            <button onClick={() => navigate("/")} type="button" className="mt-3 px-6 py-2 border rounded-md border-violet-600 bg-violet-600">
              <span className="sr-only text-white sm:not-sr-only">Shop Now</span>
            </button>
        </div>
      )}
    </div>
  )
}

export default Cart
