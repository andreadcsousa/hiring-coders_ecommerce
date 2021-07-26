function salvaContatoLocalStorage() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const data = document.getElementById("data").value;
  const telefone = document.getElementById("telefone").value;
  const feminino = document.getElementById("feminino").value;
  const masculino = document.getElementById("masculino").value;
  const contato = {
    nome: nome,
    email: email,
    senha: senha,
    data: data,
    telefone: telefone,
    feminino: feminino,
    masculino: masculino,
  };

  return localStorage.setItem("contato", JSON.stringify(contato));
}
