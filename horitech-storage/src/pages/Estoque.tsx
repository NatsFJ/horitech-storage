function Estoque() {
  return (
    <div>
      <h1>Estoque</h1>
      <p>Gerenciamento de materiais</p>
    </div>
  )
}
export default Estoque;

produtos.length

const produtos = [
  {id: 1, nome: "Parafuso", quantidade: 50},
  {id: 2, nome: "Oléo", quantidade: 12},
  {id: 3, nome: "Correia", quantidade: 7},
]

{produtos.map((produto) => (
  <p key={produto.id}>
    {produto.nome} - {produto.quantidade} unidades

    {produtos.quantidade <10 && <span>Estoque baixo!</span>}
    </p>
))}

