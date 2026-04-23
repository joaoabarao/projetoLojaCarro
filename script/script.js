function salvarCarros(event) {
    // Impedir  de recarregar a página
    event.preventDefault();

    let titulo = document.getElementById("titulo");
    let preco = document.getElementById("preco");
    let marca = document.getElementById("marca");
    let modelo = document.getElementById("modelo");

    let cambioSelecionado = document.querySelector("input[name='marcha']:checked");

    let cambio = campoSelecionado ? cambioSelecionado.id : "Não informado";

    let lista = document.getElementById("listarCarros");
    
    let cartao = document.createElement("div")

    cartao.style.border = "1px solid #ccc";
    cartao.style.padding = "10px";
    cartao.style.marginBottom = "10px";

    cartao.innerHTML = '
    <h3>${titulo}</h3>
    <p><strong>Preço:</strong> R$ ${preco}</p>
    <p><strong>Marca:</strong> R$ ${marca}</p>
    <p><strong>Modelo:</strong> R$ ${modelo}</p>
    <p><strong>Câmbio:</strong> R$ ${cambio}</p>
    ';

    lista.appendChild(cartao);

    let carro = {
        titulo,
        preco,
        marca,
        modelo,
        cambio
    };

    let carros = JSON.parse(localStorage.getItem("carro") || []);
    carros.push(carro);
    localStorage.setItem("carros", JSON.stringify(carros));
}