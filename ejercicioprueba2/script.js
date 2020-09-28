import pizzas from './pizzas-content.js';






const _pizzaRowHandler = (e, pizza) => {
    console.log(pizza);
    const detallePizza = document.getElementById("detallepizza");
    detallePizza.innerHTML = "";
    detallePizza.appendChild(_createPizzaDetalle(pizza));
}


const _estadoOrden = {
    campo: null,
    ascendente: true
}

const _createPizzaDetalle = (pizza) => {

    const div = document.createElement("div");
    div.className = "pizza-content";
    const imagen = document.createElement("div");
    const detalle = document.createElement("div");
    imagen.className = "pizza-imagen";
    detalle.className = "pizza-detalle";

    const tituloPizza = document.createElement("H1");
    const listaIngredientes = document.createElement("ul");

    tituloPizza.innerText = pizza.nombre;

    pizza.listaIngredientes.forEach(ingrediente => {
        const ingredienteLI = document.createElement("li");
        ingredienteLI.innerText = ingrediente.nombre;
        listaIngredientes.appendChild(ingredienteLI)
    })

    detalle.appendChild(tituloPizza);
    detalle.appendChild(listaIngredientes);


    const comentario = document.createElement("div");
    comentario.className = "pizza-comentario";



    const imgEtiqueta = document.createElement("img");
    imgen.appendChild(imgEtiqueta);
    imgEiquetaclassName = "imagenpizzas";
    document.getElementById("imagenpizzas").src = 'http: //localhost:8080/pizzas/imagen/ { pizza.id }/'
    imagenpizzas.alt = pizza.nombre;
    imagenpizzas.title = pizza.nombre;


    div.appendChild(comentario);
    div.appendChild(imagen);
    div.appendChild(detalle);
    return div;
}




const _ordenaTabla = (e) => {
    const campoAOrdenar = e.target.innerText.toLowerCase();

    if (
        _estadoOrden.campo &&
        _estadoOrden.campo === campoAOrdenar &&
        _estadoOrden.ascendente
    ) {
        _estadoOrden.ascendente = false;
    } else {
        _estadoOrden.ascendente = true;
    }

    _estadoOrden.campo = campoAOrdenar;

    const pizzasOrdenadas = pizzas.sort( 
        (a, b) => {
            // a.id  === a["id"]
            const campoa = typeof(a[campoAOrdenar]) == "string" ?
                a[campoAOrdenar].toLowerCase() : a[campoAOrdenar];
            const campob = typeof(b[campoAOrdenar]) == "string" ?
                b[campoAOrdenar].toLowerCase() : b[campoAOrdenar];
            return campoa > campob ?
                (_estadoOrden.ascendente ? 1 : -1) :
                (_estadoOrden.ascendente ? -1 : 1);
        }
    )
    render(pizzasOrdenadas);

}



// Crea el encabezado de la tabla
const _createTableHeader = () => {
    const tr = document.createElement("tr");
    const thid = document.createElement("th");
    thid.innerText = "ID";
    const thnombre = document.createElement("th");
    thnombre.innerText = "Nombre";
    tr.appendChild(thid);
    tr.appendChild(thnombre);

    // Introduzco los listeners
    thid.addEventListener("click", _ordenaTabla);
    thnombre.addEventListener("click", _ordenaTabla);



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

    tr.className = impar ? "impar" : "par";

    tr.addEventListener("click",
        e => _pizzaRowHandler(e, pizza)
    )
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
    document.getElementById("tabla").innerHTML = "";
    document.getElementById("tabla").appendChild(createTable(pizzas));
}

// Pone las cosas en su sitio
const init = () => {
    render(pizzas);

}


getPizzas().then(
    res => res.json()
).then(
    pizzas => {
        pizzasListado(pizzas);
        return getPizzaNombre();
    }
).then(
    pizza => {
        mostrarPizzaNombre(pizza); // duda pizza o pizza.nombre
    }
).catch(
    err => {
        alert("Error en las peticiones");
        console.log(err);
    })



function getPizzas() {
    return fetch('http://localhost:8080/api/pizzas/'); // comprobar url
}


function getPizzaNombre() {
    return fetch('https://reqres.in/api/pizzas/(pizzas.nombre)');
    //comprobar url
}

function pizzasListado(pizzas) {
    let div_listadoDePizzas = document.createElement("div");
    div_listadoDePizzas.className = "pizzas-carta";

    let cartaDePizzas = document.createElement('h2');
    cartaDePizzas.innerHTML = "Carta de Pizza World";
    let pizzasDeLaCarta = document.createElement('ul)');
    pizzas.map((pizza, id) => { // o un foreach

        let pizzaLI = document.createElement("li");
        pizzaLI.innerText = " [ " + pizza.id + " ] ; " + pizza.nombre;
        pizzasDeLaCarta.appendChild(pizzaLI)

    });
    div_listadoDePizzas.appendChild(cartaDePizzas);
    div_listadoDePizzas.appendChild(pizzasDeLaCarta);


    document.querySelector(".loading").style.display = 'none';
    // document.querySelector("#detallePizza .loading").style.display = 'none';
    // y en CSS y HTML hacer un display:block;
}

function mostrarPizzaNombre(pizza) {
    let detallePizza = document.createElement("div");
    detallePizza.className = "pizza-detallada";
    let pizzaNombre = document.createElement('h4');
    let pizzaIngredientes = document.createElement('ul)');
    let avatar = document.createElement('img');
    avatar.className = "pizza-avatar";


    pizzaNombre.innerHTML = pizza.nombre;

    pizza.listaIngredientes.forEach(ingrediente => {
        let ingredienteLI = document.createElement("li");
        ingredienteLI.innerText = ingrediente.nombre;
        pizzaIngredientes.appendChild(ingredienteLI)
    })


    avatar.src = 'http: //localhost:8080/pizzas/imagen/{ pizza.id }/';

    avatar.width = '100';

    detallePizza.appendChild(pizzaNombre);
    detallePizza.appendChild(listaIngredientes);
    detallePizza.appendChild(avatar);

    // document.querySelector("#detallePizza .loading").style.display = 'none';
    // y en CSS y HTML hacer un display:block;
}


document.body.addEventListener("load", init());
/**
 * var cadena = document.querySelector("#filter");
cadena.addEventListener("keypress", buscador) {

}
 *function buscador(pizzas) {
    let palabraAbuscar = cadena.value.toLowerCase();
    let pizzasMinusculas = pizzas.nombre.toLowerCase();

    var pizzasFiltradas = [];
    pizzasMinusculas.forEach(element => {
        if (element.includes(palabraAbuscar)) {
            pizzasFiltradas.push(element);
        };
    })
     
    const listaPizzasFiltradas = document.createElement("ul");
    pizzasFiltradas.forEach(element => {
        const pizzaLI = document.createElement("li");
        pizzaLI.innerText = pizzasFiltradas.element;
        listaPizzasFiltradas.appendChild(pizzaLI);
    })
    divBusqueda = document.createElement('div');
    divBusqueda.className = "resultadoBusqueda";
    divBusqueda.innerHTML = "";
    divBusqueda.appendChild(listaPizzasFiltradas);
    divBusqueda.style.display = "block";

    return divBsqueda;
}

*/











