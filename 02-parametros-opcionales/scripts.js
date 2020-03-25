// Parámetros en javascript

const tellMeYourName = (name) => {
    console.log("tu nombre es "+name);
}

// tellMeYourName("Juan"); // tu nombre es Juan

// tellMeYourName(); // tu nombre es undefined

// tellMeYourName("Juan", "García"); // tu nombre es Juan



// Para contemplar que el parámetro es opcional , le ponemos un valor por defecto
const tellMeYourNameDefault = (name = "Rosa") => {
    console.log("tu nombre es "+name);
}

// tellMeYourNameDefault("Juan"); // tu nombre es Juan

// tellMeYourNameDefault(); // DIFERENCIA : tu nombre es Rosa 

// tellMeYourNameDefault("Juan", "García"); // tu nombre es Juan

// Para contemplar que el parámetro es opcional , le ponemos un valor por defecto
const tellMeNameAndSurname = (name, surname = "López") => {
    console.log("tu nombre es "+name +" "+surname);
}

// tellMeNameAndSurname("Juan"); // tu nombre es Juan

// tellMeNameAndSurname(); // DIFERENCIA : tu nombre es Rosa 

// tellMeNameAndSurname("Juan", "García"); // tu nombre es Juan


const lenguajesDeProgramacion = (lenguaje1, lenguaje2, lenguaje3) => {
    console.log(lenguaje1, lenguaje2, lenguaje3)
}

// lenguajesDeProgramacion("Java");
// lenguajesDeProgramacion("Java", "Javascript");
// lenguajesDeProgramacion("Java", "Javascript",true);

const escribeNombre = (nombre, porPantalla = false) =>{
    if (porPantalla){
        document.write(nombre);
    } else {
        console.log(nombre);
    }
}

//escribeNombre("Juan");
//escribeNombre("Juan", true);

// spread operator (parametro de resto)
// generar o devolver un array como sus componentes
const misHermanos = (miNombre, ...hermanos) => {
    console.log("nombre", miNombre);
    console.log("hermanos", hermanos);
    console.log("numero de hermanos", hermanos.length);
}

misHermanos("Maria", "Juan", "Perico", "Andrés");

// spread operator en la dirección contraria
const todoslosparametros = ["Alfonso", "h1", "h2", "h3", "h4", "h5"];
misHermanos(...todoslosparametros);
/**
 * nombre Alfonso
 * scripts.js:61 hermanos (5) ["h1", "h2", "h3", "h4", "h5"]
 * scripts.js:62 numero de hermanos 5
 */



