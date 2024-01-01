// Objeto JSON
let persona = {
    "nombre": "Juan",
    "edad": 25,
    "ciudad": "Ciudad A",
    "casado": false,
    "hobbies": ["leer", "correr", "viajar"],
    "direccion": {
        "calle": "Calle Principal",
        "numero": 123,
        "codigoPostal": "12345"
    }
};

// Imprimir el objeto JSON
console.log(JSON.stringify(persona, null, 2));

// Acceder a propiedades del objeto JSON
console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Hobbies: ${persona.hobbies.join(", ")}`);
console.log(`Dirección: ${persona.direccion.calle} ${persona.direccion.numero}, CP: ${persona.direccion.codigoPostal}`);
