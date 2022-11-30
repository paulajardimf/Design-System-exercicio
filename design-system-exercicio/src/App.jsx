import CardProduto from "./components/CardProduto"
import produtos from "./produtos.json"

function App() {
  

  return (
    <>
      {produtos.map((produto, index) =>
        <CardProduto produto={produto} key={index} />
      )}
      
    </>
  )
}

export default App
