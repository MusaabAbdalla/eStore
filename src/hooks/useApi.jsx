import { useState, useEffect } from "react";



//This Api hook will fetch data for all products i need to find a way to fetch a single porduct
function useApi(url){
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(()=>{
    async function getData(){
      try{
        setIsLoading(false)
        setIsLoading(true)
        const response = await fetch(url)
        const json = await response.json()
        setData(json.data)

      }
      catch(error){
        console.log(error)
        setIsError(true)
      }
      finally{
        setIsLoading(false)
      }
    }
    getData()
  },[url])
return {data, isLoading, isError}

}

export default useApi
