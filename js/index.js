const btnEnviar = document.getElementById("btn-envia");
btnEnviar.addEventListener("click", enviaDados);

function enviaDados() {
  const feedbackElement = document.getElementById("feedback");
  const nomeElement = document.getElementById("feedback-nome");
  const feedback = feedbackElement.value;
  const nome = nomeElement.value;

  if (feedback === "") {
    alert("Você se esqueceu de deixar seu feedback");
  } else if (nome === "") {
    alert("Você esqueceu de informar seu nome");
  } else {
    // Criar uma li com os dados e enviar para dentro da ul que vai aparecer na tela
    const ul = document.getElementById("feed-list");
    const h2feed = document.getElementById("h2-feed");
    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    li.innerHTML = `${nome}: ${feedback}`;
    h2feed.innerHTML = "Comentários:";
    ul.appendChild(li);

    // Limpar os campos de feedback e nome
    feedbackElement.value = "";
    nomeElement.value = "";
  }
}
