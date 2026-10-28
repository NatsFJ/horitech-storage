const produtos = [
  { id: 1, nome: "Parafuso", quantidade: 50 },
  { id: 2, nome: "Porca", quantidade: 12 },
  { id: 3, nome: "Correia", quantidade: 7 },
];

function Estoque() {
  return (
    <div>
      <h1>Estoque</h1>
      <p>Gerenciamento de materiais</p>

      <p>{produtos.length} produtos cadastrados</p>

      {produtos.map((produto) => (
        <p key={produto.id}>
          {produto.nome} - {produto.quantidade} unidades
          {produto.quantidade < 10 && (
            <span> ⚠️ Estoque baixo!</span>
          )}
        </p>
      ))}
    </div>
  );
}

export default Estoque;
