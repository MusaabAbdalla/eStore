import useApi from "@/hooks/useApi";
import useProductApi from "@/hooks/useProductApi";
const API = "https://v2.api.noroff.dev/online-shop"


function Product({ id }) {
  const { data, isLoading, isError } = useProductApi(`${API}/${id}`)

  if(isLoading || !data){
    return <div>Product is Loading</div>
  }
  if(isError){
    return <div>There is a problem</div>
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <img alt="" src={data.image.url} />

    </div>
  )
}


export default Product
