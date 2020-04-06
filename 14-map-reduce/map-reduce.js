console.log("map and reduce");

array = [4, 7, 7, 3, 8];

// Hasta ahora conocemos dos métodos para recorrer un array

// for ...
console.log("for")
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

// foreach
console.log("foreach:")
// el foreach no nos devuelve nada
const responseForeach = array.forEach(element => {
    console.log(element)
});
console.log("respuesta foreach", responseForeach);

// MAP
// es muy parecido a foreach
// pero en el callback le puedo asignar un return
// pongamos que quiero multiplicar por dos todos los
// elementos del array

// crea un nuevo array con los return
// array sigue siendo igual
let responseMap = array.map(
    element => {
        return element * 2;
    }
)

console.log("respuesta map", responseMap)
console.log("array", array);

const objetos = [
    {
        nombre: "Pepe",
        edad: 27
    },
    {
        nombre: "Rosa",
        edad: 47
    },
    {
        nombre: "Luis",
        edad: 8
    },
    {
        nombre: "Laura",
        edad: 45
    },
    {
        nombre: "Marco",
        edad: 2
    },
]

responseMap = objetos.map(
    e => {
        return "<h1>" + e.nombre + "</h1>";
    }
)

console.log("respuesta mapa objetos", responseMap);

// hacerlo sólo con los mayores de 18

responseMap = objetos.filter(
    item => item.edad > 18
).map(e => {
    return `<h1>${e.nombre}</h1>`
})
console.log(responseMap);

// con map hemos hecho una transformación de cada resultado
// con filter hemos obtenido un subconjunto de resultados



// Reduce
// Reduce un array a un sólo elemento

const resultadoReduce = [4, 6, 10, 12].reduce(
    (valorAcumulado, valorActual) => {
        return valorAcumulado + valorActual;
    }
)

console.log("reduce", resultadoReduce);

const reduceString = objetos.reduce(
    (valorAcumulado, valorActual) => {
        console.log("valor acumulado", valorAcumulado);
        return (valorAcumulado.nombre ? `<h1>${valorAcumulado.nombre}</h1>` : valorAcumulado) + `<h1>${valorActual.nombre}</h1>`
    }
);

console.log("reducir string", reduceString);

// Further work

//Some
const arrayNumeros = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log("hay elementos pares ", arrayNumeros.some(even));
// expected output: true

console.log("Todos los elementos son pares ",
    arrayNumeros.every(
        even
    )
)