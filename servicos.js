const servicos = [
  {
    titulo: "Vacinação",
    descricao: "Proteção completa e agendamento rápido para a saúde do seu pet.",
    link: "#",
    imagem: "./assets/vacinacao-red.jpg",
  },
  {
    titulo: "Banho e tossa",
    descricao: "Higiene, estética e cuidado especializado para todas as raças.",
    link: "#",
    imagem: "./assets/tossa-red.jpg",
  },
  {
    titulo: "Produtos pet",
    descricao: "Acessórios, brinquedos e a melhor seleção de rações para o seu amigo.",
    link: "#",
    imagem: "./assets/produtos-red.jpg",
  },
];

const container = document.getElementById("servicos-lista");

servicos.forEach((servico) => {
  const card = document.createElement("div");
  card.classList.add("servico-card");

  const id = servico.titulo
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");

  card.id = id;

  card.innerHTML = `
    <img src="${servico.imagem}" class="servico-img" />
    <h3>${servico.titulo}</h3>
    <p>${servico.descricao}</p>
    <a href="${servico.link}" target="_blank">Ver Serviço</a>
  `;

  container.appendChild(card);
});

const formElemento = document.querySelector("form");
const inputsElementos = document.querySelectorAll("input");
const textAreaElemento = document.querySelector("textarea");

formElemento.addEventListener("submit", function (event) {
  event.preventDefault();

  let valores = [];

  inputsElementos.forEach(function (input) {
    valores.push(input.value);
  });

  valores.push(textAreaElemento.value);

  console.log("dados do formulário:", valores);
});
