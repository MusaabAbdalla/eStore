import { useNavigate} from "react-router-dom"


function CheckoutSuccessPage() {
  const navigate = useNavigate()
  return (
    <div className="max-w-s mx-auto mt-20  ">
      <div className="flex flex-col items-center gap-y-5">
        <div className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="mb-3 text-gray-900 title-font font-bold text-xl">Thank you fort the order!</p>
          <p className=""> Your order hand now been placed and you will shortly receive email confirmation.</p>
        </div>
            <button onClick={() => navigate("/")} type="button" className="mt-3 px-6 py-2 border rounded-md border-violet-600 bg-violet-600">
              <span className="sr-only text-white sm:not-sr-only">Return to Shop</span>
            </button>
      </div>
    </div>
  )
}

export default CheckoutSuccessPage
