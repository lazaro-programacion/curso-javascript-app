// Arrays

// dos formas de construir un array
const a = ["pepe", "juan"];
const b = new Array("rosa", "laura", "juanita");

// console.log("a",a);
// console.log("b",b);

// La siguiente no es igual (sin el new)
const c = Array("hola");
// console.log(c);

// Un array no tiene tipo, por lo tanto podemos poner diferentes "tipos de variable"
const d = ["Luis", 56, true, () => console.log("hola"), ["1", 1]];
//console.log(d);

// Podemos añadir un elemento con push
d.push("hola cocacola");
// console.log(d);

// para acceder a un elemento usamos los corchetes
// console.log(d[0]);
// console.log(d[4]);

// en el caso del cuarto elemento es otro array, por lo tanto lo podemos considerar
// como de varias dimensiones llamándolo con dos grupos de corchetes
// console.log(d[4][0]);

// Cuando un array es una constante no podemos cambiar de array pero sí su contenido
// Pasa también en los objetos

const x = ["pepe"];
// añadir un elemento no me da error
x.push(45);

// el siguiente me da error
//x = [5,6];

// cambiar un elemento no me da error
x[1] = 67;
//console.log(x);



/**
 * RECORRER UN ARRAY
 */

const recorrer = ["hermano1", "hermano2", "hermano3", "hermano4", "hermano5"];
// indices son:       0           1            2          3           4

// Forma clásica: programación imperativa
document.write("<ul>");
for (let index = 0; index < recorrer.length; index++) {
    document.write("<li>" + recorrer[index] + "</li>");
}
document.write("</ul>");

document.write("<hr>");

// Forma moderna: programación funcional

// Foreach : va a llamar a una función que le pasemos con los parámetros de:
// elemento (p.ej. hermano1), indice (0,1...), array (array completo)
// lo hará por cada uno de los elementos
document.write("<ul>");
recorrer.forEach(
    (elemento) => {
        document.write("<li>" + elemento + "</li>");
    }
)
document.write("</ul>");


document.write("<hr>");

// aquí uso también el índice
document.write("<ul>");
recorrer.forEach(
    (elemento, index) => {
        document.write("<li>" + index + "- " + elemento + "</li>");
    }
)
document.write("</ul>");

document.write("<hr>");

// aquí uso también el índice
document.write("<ul>");
recorrer.forEach(
    (elemento, index, array) => {
        if (index === 0 || index === array.length-1) {
            document.write('<li style="color:blue">' + index + "- " + elemento + "</li>");
        } else{
            document.write("<li>" + index + "- " + elemento + "</li>");
        }
        // console.log(array);
    }
)
document.write("</ul>");

document.write("<hr>");

// Comillas en Javascript

// valen tanto las dobles como las simples
// si quiero poner comillas dentro de las comillas lo más sencillo es utilizar dentro
// las que no he utilizado fuera
const comillas1 = "Hola 'amigos'";
// console.log(comillas1);
const comillas2 = 'Hola "amigos"';
// console.log(comillas2);

/**
 * OPERACIONES CON ARRAYS
 */


const paises = ["España", "China", "Italia", "Reino Unido", "Francia", "Corea"];

// Añadir un elmento
const elementoadd = "Alemania";

paises.push(elementoadd);
console.log(paises);

// Eliminar el último elemento
console.log("eliminamos el elemento", paises.pop());
console.log(paises);
console.log("eliminamos el elemento", paises.pop());
console.log(paises);

// Buscar el índice de un elemento
console.log("el índice de España es ", paises.indexOf("España"));
console.log(paises[paises.indexOf("España")]);

// Eliminar el primer elemento
console.log("eliminando elemento", paises.shift());
console.log(paises);

// Eliminar un elemento concreto
console.log("eliminando elemento ", paises.splice(paises.indexOf("Italia"),1));
console.log(paises);

paises.push("Reino No Unido");

/**
 * Filtros
 */
const paises_filtrados = paises.filter(
    (item) => {
        // que contengan la palabra Reino
        //return item.includes("Reino");
        // Que más de 15 letras
        return item.length>10;
    }
);

console.log(paises_filtrados);
console.log("los países no se han modificado", paises);

console.log("Países que empiezan por C", paises.filter(item => item.startsWith("C")));


/**

{ 
    nombre : "Alfonso",
    edad : 45
}


personas.filter(
    (item) => item.edad>40;
)
*/









