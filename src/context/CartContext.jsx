import { createContext, useReducer } from "react";

const CartContext = createContext()


function cartReducer(state, action) {
  switch (action.type) {
    case "addToCart":
      const itemExist = state.find(item => item.id === action.payload.id)
      if (itemExist) {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + action.payload.quantity }
          }
          else {
            return item
          }
        })
      } else {
        return [...state, { ...action.payload, quantity: action.payload.quantity }]
      }

    case "incrementQuantity":
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 }
        }
        else {
          return item
        }
      })

    case "decrementQuantity":
      return state
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 }
          }
          else {
            return item
          }
        })
        .filter((item) => item.quantity > 0)

    case "removeFromCart":
      return state.filter(item => item.id !== action.payload)

    case "clearCart":
      return []

    default:
      return state;
  }

}



export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [])
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )

}

export { CartContext }
