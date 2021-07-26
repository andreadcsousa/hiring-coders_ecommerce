function salvaContatoLocalStorage() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const data = document.getElementById("data").value;
  const telefone = document.getElementById("telefone").value;
  const sexo = document.getElementById("sexo").value;
  const contato = {
    nome: nome,
    email: email,
    senha: senha,
    data: data,
    telefone: telefone,
    sexo: sexo,
  };

  return localStorage.setItem("contato", JSON.stringify(contato));
}
