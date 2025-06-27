let esLunes = true;
let esFinDeSemana = false;
console.log("esLunes: "+esLunes);
console.log("esFinDeSemana: "+esFinDeSemana);

let numero = 10;
console.log(numero+" > 5: ", numero > 5); // true

edad = 20;
console.log("Mayor de edad: ", edad >= 18); // true

let esDeDia = true;
if (esDeDia) {
    console.log("¡Explora el mundo!");
}
if (esDeDia == true) {
    console.log("Además, ¡usa una gorra!");
}

let mascota = "perro";
if (mascota == "perro") {
    console.log("¡Tienes un amigo peludo!");
} else {
    console.log("¡Tienes un compañero misterioso!");
}

let clima = "soleado";
if (clima == "soleado") {
    console.log("¡Es un día perfecto para un picnic!");
} else if (clima == "lluvioso") {
    console.log("¡Hora de saltar en charcos!");
} else {
    console.log("¡Vamos a tirarnos en trineo en la nieve!");
}

let temperatura = 25;
let estaLloviendo = false;
if (temperatura >= 20 && !estaLloviendo) {
    console.log("¡Este es un buen día para dar un paseo!");
}

if (temperatura >= 20 || !estaLloviendo) {
    console.log("¡Podría ser un buen día para salir!");
}
