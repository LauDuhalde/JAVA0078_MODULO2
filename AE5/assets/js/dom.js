//querySelector: Obtiene el primer elemento que coincida con la condición.
const boton = document.querySelector('.boton');
const boton2 = document.querySelector('#despedir');
const boton3 = document.querySelector('#trabajar'); //No existe, null
if(boton3){
    console.log('Boton 3 existe');
}else{
    console.log('Boton 3 no existe');
}

//querySelectorAll: Obtiene todos los elementos que coincidan con la condición.
const botones = document.querySelectorAll('.boton');
const enlaces = document.querySelectorAll('.enlaces'); //No existe, length 0
if(enlaces.length==0){
    console.log('No hay enlaces');
}
if(botones.length>0){
    botones.forEach(function(botones) { //Recorre todos los elementos
        botones.style.color = 'white';
        botones.style.backgroundColor = 'red';
    });
}

//Manipulación de elementos
const encabezado = document.querySelector('h1');
encabezado.textContent = 'Nuevo Título';
encabezado.innerHTML='Cambio con innerHTML';

const img = document.querySelector('img');
img.setAttribute('alt','Set attribute alt');
img.style.backgroundColor = 'blue';

//Agregar elemento
let nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Este es un párrafo agregado dinámicamente.';
document.body.appendChild(nuevoParrafo);

//Eliminar un elemento
let parrafo = document.querySelector('p');
document.body.removeChild(parrafo);

function saludar(){
    alert('Hola!');
}

function despedir(){
    alert('Adiós!');
}