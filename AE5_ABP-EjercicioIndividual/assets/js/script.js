/* ===================== ACEPTAR/RECHAZAR SOLICITUDES ===================== */
const spanQSolicitudes = document.querySelector('#qSolicitudes'); //Obtiene el span con la cantidad de solicitudes
const spanQConexiones = document.querySelector('#qConexiones'); //Obtiene el span con la cantidad de conexiones

function aceptarSolicitud(boton) {
    const solicitud = boton.closest('.solicitudes'); //Obtiene el elemento de clase solicitudes lo más cercano al boton
    if (!solicitud) return; //Si no encuentra la solicitud, retorna haciendo nada
    if(spanQSolicitudes){
        let qSolicitudes = Number(spanQSolicitudes.innerHTML)-1; //Transforma en número el texto del span y le resta 1
        spanQSolicitudes.innerHTML = qSolicitudes; //Asigna los valor para que sea visible
    }
    if(spanQConexiones){
        let qConexiones = Number(spanQConexiones.innerHTML)+1; //Transforma en número el texto del span y le suma 1
        spanQConexiones.innerHTML = qConexiones; //Asigna los valor para que sea visible
    }
    
    // Obtener nombre y foto
    const nombre = solicitud.querySelector('span').innerText;
    const imgSrc = solicitud.querySelector('img').src;
    const imgAlt = solicitud.querySelector('img').alt;

    // Crear nuevo <li> para la lista de conexiones
    const nuevoItem = document.createElement('li');
    nuevoItem.innerHTML = '<img src="'+imgSrc+'" alt="'+imgAlt+'">'+nombre;

    // Agregar a la lista de conexiones
    const listaConexiones = document.querySelector('#listaConexiones');
    listaConexiones.appendChild(nuevoItem);

    // Eliminar solicitud
    solicitud.remove();
}

function rechazarSolicitud(boton) {
    const solicitud = boton.closest('.solicitudes');
    if (solicitud) {
        let qSolicitudes = Number(spanQSolicitudes.innerHTML)-1; //Transforma en número el texto del span y le resta 1
        spanQSolicitudes.innerHTML = qSolicitudes; //Asigna los valores para que sean visibles
        solicitud.remove(); //Elimina la solicitud
    }
}

const botones_aceptar = document.querySelectorAll('.aceptar'); //Obtiene todos los botones aceptar
const botones_rechazar = document.querySelectorAll('.rechazar'); //Obtiene todos los botones rechazar

// Asignar eventos a botones
botones_aceptar.forEach(function(boton) { //A cada boton aceptar se le agrega la funcion aceptarSolicitud para cuando se le hace click
    boton.addEventListener('click', function() { 
        aceptarSolicitud(this); //Envia el boton como this, ya que será usado para recuperar la solicitud de dicho boton
    });
});

botones_rechazar.forEach(function(boton) {
    boton.addEventListener('click', function() {
        rechazarSolicitud(this);
    });
});

/* ===================== EDITAR PERFIL ===================== */
const aEditProfile = document.querySelector('#edit-profile');
if(aEditProfile){ //Si existe el anchor edit-profile
    aEditProfile.addEventListener('click',function(){
        const h2Nombre = document.querySelector('#nombre');
        h2Nombre.textContent = 'Sophia Larsen';
    });
}

/* ===================== HOVER BOTON CERRAR SESION ===================== */
const botonCerrarSesion = document.querySelector('#cerrar-sesion');
if(botonCerrarSesion){ //Si existe el botón cerrar-sesion
    // Al pasar el mouse por encima
    botonCerrarSesion.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#FF70B8';
    });

    // Al quitar el mouse
    botonCerrarSesion.addEventListener('mouseout', function () {
        this.style.backgroundColor = '#01BCD4';
    });
}