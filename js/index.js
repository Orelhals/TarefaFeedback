const btnEnviar = document.getElementById("btn-envia");
btnEnviar.addEventListener("click", enviaDados);

function enviaDados() {
  const feedbackElement = document.getElementById("feedback");
  const nomeElement = document.getElementById("feedback-nome");
  const feedback = feedbackElement.value;
  const nome = nomeElement.value;
  console.log(feedback);
  console.log(nome);

  // Criar uma li com os dados e enviar para dentro da ul que vai aparecer na tela
  const ul = document.getElementById("feed-list");
  const li = document.createElement("li");
  li.innerHTML = `${nome}: ${feedback}`;
  ul.appendChild(li);

  // Limpar os campos de feedback e nome
  feedbackElement.value = "";
  nomeElement.value = "";
}
