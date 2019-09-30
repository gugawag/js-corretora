// Algoritmo de tratamento de evento
//1 - elemento p/ acrescentar tratamento evento
//2 - acrescentar o tratamento

//1
var tabela = document.querySelector("#tabela-casas");

//Usando função, sem arrow function
// tabela.addEventListener("dblclick", function () {
//evento.target -> td
//evento.target.parentNode -> tr da casa
// evento.target.parentNode.classList.add("fade-out");
// setTimeout(() => evento.target.parentNode.remove(), 1000);
//     }
// );

//2
//com arrow function (sintaxe mais simples, mas é igual ao código acima
tabela.addEventListener("dblclick", (evento) => {
        //evento.target -> td
        //evento.target.parentNode -> tr da casa
        evento.target.parentNode.classList.add("fade-out");
        setTimeout(() => evento.target.parentNode.remove(), 1000);
    }
);
