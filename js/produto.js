function salvaContatoLocalStorage() {
  const codigo = document.getElementById("codigo").value;
  const produto = document.getElementById("produto").value;
  const categoria = document.getElementById("categoria").value;
  const plataforma = document.getElementById("plataforma").value;
  const quantidade = document.getElementById("quantidade").value;
  const comprar = document.getElementById("comprar").value;
  const cadastro = {
    codigo: codigo,
    produto: produto,
    categoria: categoria,
    plataforma: plataforma,
    quantidade: quantidade,
    comprar: comprar,
  };

  return localStorage.setItem("cadastro", JSON.stringify(cadastro));
}
