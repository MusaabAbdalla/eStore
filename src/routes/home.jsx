import useApi from "../hooks/useApi"

const API = "https://v2.api.noroff.dev/online-shop"


function Home(){
  const {data, isLoading, isError} =useApi(API)
  console.log(data)
  return(
    <div>
    {data.map((product)=>(
      <div key={product.id}>
      <h2>{product.title}</h2>
      <img alt="" src={product.image.url} />
      </div>
    ))}
    </div>
  )
}



export default Home
