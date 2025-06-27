function saludar(nombreAmigo) {
    console.log("¡Hola, " + nombreAmigo + "!");
}
saludar("Luis");

function encontrarMaximo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo(numero1, numero2);
console.log("El máximo entre", numero1, "y", numero2, "es:", maximo);

