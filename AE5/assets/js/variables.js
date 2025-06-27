// Declaración de variables
/* 
    let: variables que pueden cambiar, solo se puede reasignar. Se restringe al espacio donde se está escribiendo, scope ambito de bloque.
    const: variables que no cambian después de la asignación inicial.
    var: se puede reasignar y redeclarar. Se pueden usar en cualquier parte, scope ambito de función si se declara fuera de una función queda como variable global.
    Variables globales con var pueden sobrescribir propiedades del navegador:
        var alert = "Hola";
        alert("Funciona"); // TypeError: alert is not a function
    Si no se indica let, var o const, crea una variable global (scope global) implícita (insegura), puede ser accedida desde cualquier lugar.
*/
let edad = 50;
let apellidos = "Santos";
let meGustaJS = true;

// Sobreescritura/reasignación de variables
edad = 32;  
edad = "Treinta y dos";  // Cambio de número a cadena de texto
//El tipo de dato de la variable está definido por su contenido.

let nombre = "Juan";
console.log("¡Hola, " + nombre + " " + apellidos + "! Tienes " + edad + " años.");

// Operadores básicos
let suma = 12 + 3; // 15 
console.log("suma: "+suma);

let concatenacion = "12" + "3"; // "123"
console.log("concatenacion: "+concatenacion);
//Se ejecuta de izquierda a derecha o por agrupación (), si asignamos 2+3+"x", el resultado es 5X.

let resta = 12 - 3; // 9
console.log("resta: "+resta);

let multiplicacion = 12 * 3; // 36
console.log("multiplicacion: "+multiplicacion);

let division = 12 / 3; // 4 
console.log("division: "+division);

let divisionDecimal = 12 / 5; // 2.4
console.log("divisionDecimal: "+divisionDecimal);

// Precedencia matemática
let resultado = 2 + 4 * 10;  // 42
console.log("resultado: "+resultado);

let resultado2 = (2 + 4) * 10;  // 60
console.log("resultado2: "+resultado2);

// Operadores de asignación compuesta
suma += 2; // 17
console.log("suma: "+suma);

resta -= 7; // 2
console.log("resta: "+resta);

multiplicacion *= 4; // 144
console.log("multiplicacion: "+multiplicacion);

division /= 2; // 2
console.log("division: "+division);

/*
JavaScript maneja diferentes tipos de datos, los más comunes son:
    Números: Enteros y decimales (42, 3.14).
    Cadenas de texto: Representan texto ("Hola").
    Booleanos: Solo pueden tener valores true o false.
    Undefined: Indica que una variable ha sido declarada pero no tiene un valor asignado.
    Null: Representa la ausencia intencionada de valor.
*/