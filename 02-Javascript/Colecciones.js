// Crear un arreglo
let miArray = [1, 2, 3, 4, 5];

// Acceder a elementos del arreglo
console.log(miArray[2]);  // Imprime 3

// Modificar un elemento del arreglo
miArray[1] = 10;

// Imprimir el arreglo completo
console.log(miArray);  // Imprime [1, 10, 3, 4, 5]

// Agregar un elemento al final del arreglo
miArray.push(6);

// Imprimir el arreglo después de agregar un elemento
console.log(miArray);  // Imprime [1, 10, 3, 4, 5, 6]

// Eliminar el último elemento del arreglo
let ultimoElemento = miArray.pop();

// Imprimir el arreglo después de eliminar el último elemento
console.log(miArray);       // Imprime [1, 10, 3, 4, 5]
console.log(ultimoElemento); // Imprime 6

// Agregar elementos en una posición específica
miArray.splice(2, 0, 7, 8);

// Imprimir el arreglo después de agregar elementos en la posición 2
console.log(miArray);  // Imprime [1, 10, 7, 8, 3, 4, 5]

// Eliminar elementos en una posición específica
miArray.splice(3, 2);

// Imprimir el arreglo después de eliminar 2 elementos desde la posición 3
console.log(miArray);  // Imprime [1, 10, 7, 5]

// Reemplazar elementos en una posición específica
miArray.splice(2, 1, 9);

// Imprimir el arreglo después de reemplazar el elemento en la posición 2
console.log(miArray);  // Imprime [1, 10, 9, 5]



