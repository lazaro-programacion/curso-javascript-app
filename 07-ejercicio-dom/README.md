# Ejercicio DOM + Objetos

## 1. Crear una tabla a partir del json de pizzas

#### Requisitos:

- Que aparezca el id y el nombre de la pizza
- El Header ha de tener su propio  estilo
- El background de las filas pares y las impares ha de ser diferente.

#### Tips:
Mi recomendación es ir por partes:

Crear métodos para la construcción de cada fila:

```javascript
_createTableHeader();
_createTableRow(pizza, impar);
createTable(pizzas);
```

Es interesante tener un método renderPizzaTable:
```javascript
renderPizzaTable() 
// otra posibilidad es:
renderPizzaTable(pizzas);
```
 

Dónde ponerlo:

Crear un div en el html donde pondremos el objeto tabla (dentro):

```html
<body>
    <div id ="pizzatable"></div>
</body>
```

Para el background de las filas pares e impares podemos hacer varias cosas:

1. Poner directamente el estilo
```javascript
element.style.background-color = "color";
```
2. Incluir un css y poner la clase:
```javascript
element.className = "impar";
```



# 2. Añadir un evento en el header para ordenar lo elementos por el campo pulsado
Esto es, si pulsamos "id" se nos ordenarán por id
Si pulsamos "nombre" se nos ordenarán por nombre

#### Tips

- Para esto es importante tener el render(), porque habrá que llamarlo con el sort del array de pizzas
- Hay que capturar el evento y ver qué elemento ha generado la llamada, para saber por dónde ordenar
- No es necesario cambiar la ordenación de arriba abajo y al revés, yo sí lo haré, pero es guardarse el estado en una variable global





# 3. Añadir un evento que al pulsar una fila nos muestre los detalles de la pizza
- Nombre pizza
- Ingredientes

#### Tips
- Recomiendo el añadir el evento al crear el table row del data (tr)

Manejador: 
```javascript
const _pizzaRowHandler = (e, pizza) => {
    console.log(pizza);
}
```

Y donde se crea la row
```javascript
    tr.addEventListener("click",
        e => _pizzaRowHandler(e, pizza)
    )
```

Toda la parte de divs , cssgrid y tamaños (plantilla) en el html

```html
    <div class="container">
        <div id="tabla"></div>
        <div id="detallepizza"></div>
    </div>
```

La tabla, que puede ser muy grande, si hacemos el div de tamaño fijo y overflow auto  o overflow-y scroll mantenemos el tamaño

> Añadido:
> Hacer un input de búsqueda encima de la tabla y, o bien un
> botón buscar y busca el texto en el nombre de la pizza o 
> bien que cada vez que se pulse una letra en el input
> haga la búsqueda

# 4. Mostrar los comentarios en la descripción de la pizza
- Máx 3 comentarios
(Date)


(Java - JSONIgnore)
(Java - CORS)

# 5. Añadir la imágen a la pizza

<img src="....">

```html
    <img id="imagenpizzas" src="" alt="" >
    <script>
        document.getElementById("imagenpizzas").src 
            = "http://localhost:8080/pizzas/imagen/236/"
    </script>
```

(necesitamos el backend...)

# 6. Recuperar los datos del backend

```javascript
    fetch('http://localhost:8080/api/pizzas/').then(
        res => res.json()
    ).then(
        console.log
    ).catch(
        err => console.log(err)
    )
```

(Promesas)







