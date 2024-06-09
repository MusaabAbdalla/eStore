import { useState, useEffect } from "react";



//This Api hook will fetch data for all products i need to find a way to fetch a single porduct
function useProductApi(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false)
        setIsLoading(true)
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const json = await response.json()
        if (json.data) {
          setData(json.data)
        }
        else {
          console.log("Cannot fetch Product data", data)
        }

      }
      catch (error) {
        console.log(error)
        setIsError(true)
      }
      finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [])
  return { data, isLoading, isError }

}

export default useProductApi
