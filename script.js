const formulario = document.getElementById("formContato");
const resposta = document.getElementById("resposta");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    resposta.textContent = `Obrigada, ${nome}! Sua mensagem foi recebida. Em breve entraremos em contato.`;

    formulario.reset();
});