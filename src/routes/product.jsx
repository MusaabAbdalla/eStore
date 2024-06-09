import useProductApi from "@/hooks/useProductApi";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
const API = "https://v2.api.noroff.dev/online-shop"



function Product({ id }) {
  const { data, isLoading, isError } = useProductApi(`${API}/${id}`)
  const [message, setMessage] = useState("")
  const [quantity, setQuantity] = useState(1)
  const { cart, dispatch } = useContext(CartContext)

  if (isLoading || !data) {
    return <div>Product is Loading</div>
  }
  if (isError) {
    return <div>There is a problem</div>
  }

  function addToCart() {
    dispatch({ type: "addToCart", payload: { ...data, quantity } })
    setMessage("Item added to cart successfully")
    setTimeout(() => setMessage(""), 3000)
  }

  const discount = data.price - data.discountedPrice
  const discountPercentage = ((data.price - data.discountedPrice) / data.price) * 100

  return (

    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt={data.image.alt} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={data.image.url} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {data.tags.map((tag) => (
              <h2 className="text-sm title-font text-gray-500 tracking-widest" key={tag}>{tag}</h2>
            ))}
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data.title}</h1>
            <div className="flex mb-4">
              <span className=" text-yellow-600 ml-3">Total Rating: {data.rating}</span>
            </div>
            <p className="leading-relaxed">{data.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex ml-6 items-center">
              </div>
            </div>
            <div className="flex items-start">
              <div>
                {data.discountedPrice === data.price ? (

                  <p className="title-font text-2xl  font-medium text-gray-9oo">{data.discountedPrice}</p>

                ) : (
                  <div>
                    <p className="title-font text-2xl  font-medium text-gray-9oo">{data.discountedPrice}</p>
                    <div className="flex justify-between gap-4">
                      <p className="text-sm line-through text-red-700">{data.price}</p>
                      <p className="text-sm line-through text-red-700">{discountPercentage.toFixed(0)}% OFF</p>
                    </div>
                  </div>
                )}
              </div>
              <button onClick={addToCart} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <span className="title-font font-medium text-2xl text-gray-900 ">Reviews</span>
        <div className="mt-5 ">
          {data.reviews?.length ? (

            data.reviews.map((review) => (
              <div className="flex flex-col items-center mb-10 border-2 border-violet-400 rounded-md " key={review.id}>
                <div className="flex  justify-start gap-5">
                  <span className="title-font font-medium text-xl text-gray-800">{review.username}</span>
                  <span className="title-font font-medium text-xl text-yellow-500">Rating:{review.rating}</span>
                </div>
                <span className="title-font font-medium text-l text-gray-500"> {review.description}</span>
              </div>

            ))

          ) : (
            <div>No Review to Show</div>
          )}
        </div>
      </div>
    </section>
  )
}


export default Product
