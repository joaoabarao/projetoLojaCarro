function salvarCarros(event) {
  // Impedir  de recarregar a página
  event.preventDefault();

  let titulo = document.getElementById("title").value;
  let preco = document.getElementById("preco").value;
  let marca = document.getElementById("marca").value;
  let modelo = document.getElementById("modelo").value;

  let cambioSelecionado = document.querySelector(
    "input[name='marcha']:checked"
  );

  let cambio = cambioSelecionado ? cambioSelecionado.id : "Não informado";

  let lista = document.getElementById("listarCarros");

  let carro = {
    titulo,
    preco,
    marca,
    modelo,
    cambio,
  };

  let carros = JSON.parse(localStorage.getItem("carros")) || [];
  carros.push(carro);
  localStorage.setItem("carros", JSON.stringify(carros));

  adicionarNaTela(carro);

  document.querySelector("form").reset();
}

function adicionarNaTela(carro) {
  let lista = document.getElementById("listarCarros");
  let cartao = document.createElement("div");
  cartao.classList.add("cartao");

  cartao.innerHTML = `
    <img src ='https://picsum.photos/250/150?grayscale&random=${Math.random()}"'>
    <h3>${carro.titulo}</h3>
    <p><strong>Preço:</strong> R$ ${carro.preco}</p>
    <p><strong>Marca:</strong>${carro.marca}</p>
    <p><strong>Modelo:</strong>${carro.modelo}</p>
    <p><strong>Câmbio:</strong>${carro.cambio}</p>
    `;

  lista.appendChild(cartao);
}

window.onload = function () {
  let carros = JSON.parse(localStorage.getItem("carros")) || [];

  carros.forEach((carro) => {
    adicionarNaTela(carro);
  });
};
