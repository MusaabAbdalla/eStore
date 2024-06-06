
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";


function CartIcon(){
  const {cart} = useContext(CartContext)

const totalItems = cart.reduce((sum, item)=> sum + item.quantity,0)

return (
   <div className="relative">
            <FaCartShopping className="text-2xl" />
            {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    {totalItems}
                </span>
            )}
        </div>
)
}


export default CartIcon
