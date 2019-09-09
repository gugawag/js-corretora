var casas = document.querySelectorAll(".casa");

for (var i=0; i<casas.length; i++) {
    var casa = casas[i];
    calculaAreaCasa(casa);
}

function calculaAreaCasa(casa) {
    var tdDono = casa.querySelector(".info-dono");
    var nomeDono = tdDono.textContent;
    var tdLargura = casa.querySelector(".info-largura");
    var largura = tdLargura.textContent;
    var tdComprimento = casa.querySelector(".info-comprimento");
    var comprimento = tdComprimento.textContent;
    var tdArea = casa.querySelector(".info-area");
    var calculoArea = calculaArea(largura, comprimento);
    if (calculoArea < 0) {
        tdArea.textContent = "Área inválida!";
        casa.classList.add("area-invalida");
    } else {
        tdArea.textContent = calculoArea;
    }
}

function calculaArea(largura, comprimento) {
    return largura * comprimento;
}
