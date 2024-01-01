// Clase base: Persona
class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }

    obtenerNombre() {
        return this._nombre;
    }

    getEdad() {
        return this._edad;
    }

    asignarNombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    establecerEdad(nuevaEdad) {
        if (nuevaEdad >= 0) {
            this._edad = nuevaEdad;
        } else {
            console.log("La edad no puede ser un número negativo.");
        }
    }

    imprimirInformacion() {
        console.log(`Nombre: ${this._nombre}, Edad: ${this._edad} años`);
    }
}

// Subclase: Estudiante (hereda de Persona)
class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        // Llamar al constructor de la clase base (Persona)
        super(nombre, edad);

        // Nueva propiedad específica de Estudiante
        this._curso = curso;
    }

    // Nuevo método específico de Estudiante
    obtenerCurso() {
        return this._curso;
    }

    // Método sobrescrito para personalizar el comportamiento
    imprimirInformacion() {
        console.log(`Nombre: ${this._nombre}, Edad: ${this._edad} años, Curso: ${this._curso}`);
    }
}

// Crear instancias de las clases Persona y Estudiante
let persona1 = new Persona("Juan", 25);
let estudiante1 = new Estudiante("María", 20, "Matemáticas");

// Utilizar métodos y propiedades de las instancias
persona1.imprimirInformacion();
console.log("-------------------------");
estudiante1.imprimirInformacion();
