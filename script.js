// Botão de boas-vindas: mostra uma mensagem sem abrir janelas extras.
const botaoBoasVindas = document.getElementById("btn-boas-vindas");
const mensagemBoasVindas = document.getElementById("mensagem-boas-vindas");

botaoBoasVindas.addEventListener("click", function () {
  mensagemBoasVindas.innerText = "Valeu pela visita! Fique à vontade para conhecer o projeto.";
});

// Abre e fecha uma seção com mais informações.
const botaoDetalhes = document.getElementById("btn-detalhes");
const detalhesEstudo = document.getElementById("detalhes-estudo");

botaoDetalhes.addEventListener("click", function () {
  const estaOculto = detalhesEstudo.hidden;
  detalhesEstudo.hidden = !estaOculto;
  botaoDetalhes.innerText = estaOculto
    ? "Ocultar detalhes"
    : "Ver o que estou estudando";
  botaoDetalhes.setAttribute("aria-expanded", String(estaOculto));
});

// Usa os dados do formulário para montar uma mensagem na própria página.
// Não envia nem armazena os dados.
const formulario = document.getElementById("form-contato");
const resultadoForm = document.getElementById("resultado-form");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nome || !email) {
    resultadoForm.innerText = "Preencha os dois campos para continuar.";
    return;
  }

  resultadoForm.innerText = `Obrigado, ${nome}! Seu e-mail informado foi ${email}. Este formulário é apenas uma demonstração.`;
});