const obj = {
    calle: "Gran Via",
    numero: 30,
    piso: 4,
    puerta: "4A",
    habitante: {
        nombre: "Juan",
        apellido: "López"
    }
}

console.log(obj);

// Si quiero la calle y el número tengo varias opciones
console.log(obj.calle, obj.numero);

const varCalle = obj.calle;
const varNumero = obj.numero;

console.log(varCalle, varNumero);

// Destructuring operator
// const {p1, p2} = props;
const {calle, numero, habitante} = obj;
console.log(calle,numero, habitante);

const {nombre, apellido} = habitante;
console.log(nombre, apellido);

