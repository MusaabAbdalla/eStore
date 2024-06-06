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
              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">{data.rating} Rating</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
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
                    <p className="text-sm line-through text-red-700">{data.price}</p>
                  </div>
                )}
              </div>
              <button onClick={addToCart} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
            <div>
              <span className="title-font font-medium text-2xl text-gray-900">Reviews</span>
              <div className="">
                {data.reviews?.length ? (

                  data.reviews.map((review) => (
                    <div className="border border-rounded" key={review.id}>
                      <span className="title-font font-medium text-xl text-gray-800">Rating:{review.rating}</span>
                      <span className="title-font font-medium text-xl text-gray-800">{review.username}:</span>
                      <span className="title-font font-medium text-xl text-gray-800"> {review.description}</span>
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
