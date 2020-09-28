import pizzas from './pizzas-content.js';
const _createTableHeader = () => {

    const tr = document.createElement("tr");
    const thid = document.createElement("th");
    thid.innerText = "ID";
    const thnombre = document.createElement("th");
    thnombre.innerText = "Nombre";
    tr.appendChild(thid);
    tr.appendChild(thnombre);
    tr.className = "therow"
    thid.className = "thid";
    thnombre.className = "thnombre";
    return tr;
}

const _createTableRow = (pizza, impar) => {

    const tr = document.createElement("tr");
   
    const tdid = document.createElement("td");
    tdid.innerText = pizza.id;
    const tdnombre = document.createElement("td");
    tdnombre.innerText = pizza.nombre;
    tr.appendChild(tdid);
    tr.appendChild(tdnombre);

    tr.addEventListener('click', function1)
    function function1() {
        mostrarIngredientes(pizza.nombre)
        mostrarComentario(pizza.nombre)
    }

    tr.className = impar ? "impar" : "par";
 
    return tr;
}

// Devolverá la tabla
const createTable = pizzas => {
    const table = document.createElement("table");
    table.className = "tabla-pizzas";
    table.appendChild(_createTableHeader());
    pizzas.forEach((e, i) => {
        table.appendChild(_createTableRow(e, (i % 2) == 1));
    });
    
    
    return table;
}

const render = pizzas => {
    document.getElementById("tabla").innerHTML="";
    document.getElementById("tabla").appendChild(createTable(pizzas));
}

// Pone las cosas en su sitio
const init = () => {
    render(pizzas);
}

document.body.addEventListener("load", init());

// mostrar ingredientes

function mostrarIngredientes(pizza) {

    let divingredientes = document.getElementById("ingredientes");
    divingredientes.innerHTML = "";
    let nombre = document.createElement("span");
    let nombrepizza = document.createTextNode(pizza);

    divingredientes.appendChild(nombre);
    nombre.appendChild(nombrepizza);

    let ingredient = document.createElement("ul");
    divingredientes.appendChild(ingredient);


    for (let i = 0; i < pizzas.length; i++) {

        if (pizzas[i].nombre == pizza) {

            for (let j in pizzas[i].listaIngredientes) {
                let ingrediente = document.createElement("li");
                let pizzaingrediente = document.createTextNode(pizzas[i].listaIngredientes[j].nombre);
                ingredient.appendChild(ingrediente);
                ingrediente.appendChild(pizzaingrediente);
            }
        }
        nombre.className = "nombrePizza"
        divingredientes.className = "divIngredientes"
        ingredient.className = "nombreIngredientes"

    }
    return divingredientes;
}

window.mostrarIngredientes = mostrarIngredientes;

//mostrar comentario



function mostrarComentario(pizza) {

    let divComentarios = document.getElementById("comentario");
    divComentarios.innerHTML = "";
    let com = document.createElement("h4");

    divComentarios.appendChild(com);

    divComentarios.style.overflow = "auto";
    divComentarios.style.background = "black";
    divComentarios.style.color = "white";
    divComentarios.style.fontSize = "initial";
    divComentarios.style.textAlign = "center";


    for (let i = 0; i < pizzas.length; i++) {

        if (pizzas[i].nombre == pizza) {

            for (let j in pizzas[i].listaComentarios) {
                let coment = document.createElement("p");
                let comentari = document.createTextNode(pizzas[i].listaComentarios[j].texto);
                com.appendChild(coment);
                coment.appendChild(comentari);
                coment.style.textTransform = "uppercase";
            }
        }

    }
    return divComentarios;
}
window.mostrarComentario = mostrarComentario;



function buscar(params) {
    

const formulario = document.getElementById("formulario");
const texto = formulario.value.toLowerCase();

const q =texto ;

const pizzasfiltered = pizzas.filter(
    (pizza) => {
        return pizza.nombre.toLowerCase().includes(q.toLowerCase());
    }
)

console.log("pizzas", pizzas);
console.log("pizzasfiltered", pizzasfiltered);

render(pizzasfiltered);
}
window.buscar=buscar;
formulario.addEventListener('keypress', buscar); 


/* //busqueda
const pizzas;
const formulario = document.getElementById("formulario");

const filtrar = () => {
    console.log(formulario.value);
    const texto = formulario.value.toLowerCase();

    for(let pizza of pizzas){
        let nombre = pizza.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            
        }
    }
  
   
}
formulario.addEventListener('click', filtrar);

formulario.addEventListener('keypress', filtrar); */

/* const pizzasFiltradas = pizzas.filter(function (elemento) {

    return elemento.toLowerCase().indexOf(texto);
})
console.log(pizzasFiltradas) */