import pizzas from './pizzas-content.js';
function _ingrediente() {
    let trrr = document.createElement("tr");
    let ingredientes = document.createTextNode(pizzas[i].listaIngredientes);
    trrr.appendChild(ingredientes);
    return trrr;
}
