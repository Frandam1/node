let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

let puntaje = 75;

if (puntaje >= 90) {
    console.log("Excelente");
} else if (puntaje >= 70) {
    console.log("Buen trabajo");
} else {
    console.log("Es necesario mejorar");
}

let diaSemana = "Martes";

switch (diaSemana) {
    case "Lunes":
        console.log("Comienzo de la semana");
        break;
    case "Martes":
    case "Miércoles":
    case "Jueves":
        console.log("Días laborables");
        break;
    case "Viernes":
        console.log("¡Viernes, casi fin de semana!");
        break;
    default:
        console.log("Fin de semana");
}
