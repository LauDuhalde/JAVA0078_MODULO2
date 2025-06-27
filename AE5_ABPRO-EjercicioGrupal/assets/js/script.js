/* ======================== Búsqueda en Catálogo ======================== */
const inputBuscar = document.querySelector('#txt_buscar'); //Si no lo encuentra es null
const botonBuscar = document.querySelector('#btn_buscar'); //Si no lo encuentra es null
const libros = document.querySelectorAll('.libro'); //Si no lo encuentra el largo es 0
console.log('Cantidad de libros iniciales: '+libros.length); //Escribe en consola el total de libros de catalogo

if(inputBuscar && botonBuscar){
    botonBuscar.addEventListener('click', function () {
        const texto = inputBuscar.value.toLowerCase(); // texto ingresado se transforma a minúsculas usando toLowerCase
        let coincidencias = 0; //Contador

        libros.forEach(function (libro) {
            const h3 = libro.querySelector('h3'); //busca el h3 del div libros
            let titulo = '';
            if(h3){ //Si existe el elemento
                titulo = h3.textContent.toLowerCase(); //texto en minusculas
            }
            //console.log('Titulo: '+titulo);

            const p_autor = libro.querySelector('.autor'); //busco el parrafo autor
            let autor = '';
            if(p_autor){ //si existe el parrafo
                autor=p_autor.textContent.toLowerCase(); //Obtengo el contenido del parrafo
            }
            //console.log(autor);

            const p_genero = libro.querySelector('.genero');
            let genero = '';
            if(p_genero){
                genero = p_genero.textContent.toLowerCase();
            }
            //console.log(genero);

            // Verifica si el texto se encuentra en título, autor o género
            const coincide = titulo.includes(texto) || autor.includes(texto) || genero.includes(texto);

            if (coincide){
                libro.style.display = 'block'; //Muestra el div
                coincidencias++; //suma 1 a coincidencias
                console.log('Coincidencia: '+titulo);
            }else {
                libro.style.display = 'none'; //Oculta el div
            }
        });

        console.log('Coincidencias de búsqueda: '+coincidencias);
    });
}else{
    console.log('Error al obtener los elementos dinput y button para búsqueda');
}

/* ======================== Registro ======================== */

// Selecciona el formulario y los campos de entrada por su ID
const formulario = document.querySelector('#formulario-registro');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

// Función para validar el formato de un correo electrónico usando una expresión regular
function validarCorreo(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Verifica que el email tenga el formato usuario@dominio.extensión
    return regex.test(email); // Devuelve true si el correo cumple con el formato
}

// Si el formulario existe en la página, se agrega el evento al botón "Registrarse"
if (formulario) {
    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Solo continua si todos los elementos fueron correctamente seleccionados
        if (nombre && email && password) {
            // Obtiene los valores ingresados y elimina espacios innecesarios
            const nombreValor = nombre.value.trim();
            const emailValor = email.value.trim();
            const passwordValor = password.value;

            // Validación: nombre no debe estar vacío
            if (nombreValor === '') {
                alert('Por favor, ingresa tu nombre completo.');
                return;
            }

            // Validación: el email debe tener un formato válido
            if (!validarCorreo(emailValor)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                return;
            }

            // Validación: la contraseña debe tener al menos 6 caracteres
            if (passwordValor.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres.');
                return;
            }

            // Si todas las validaciones se cumplen, muestra mensaje de éxito
            alert('¡Registro exitoso! Bienvenid@ ' + nombreValor);
            formulario.submit(); // Aquí se enviaría el formulario si hubiera conexión con un backend
        }else{
            console.log('Error al obtener los elementos del formulario');
        }
    });
}

