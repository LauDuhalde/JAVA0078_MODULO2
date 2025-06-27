$(document).ready(function () {
    const botonesReserva = $('.btn-reserva'); // Selecciona todos los botones btn-reserva

    // Cuando se hace clic en btn-reserva
    botonesReserva.click(function () {
        const titulo = $(this).closest('.card').find('.card-title').text(); //Obtiene el card-title de la card mas cercana al botón
        $('#pelicula').val(titulo); //Asigna el titulo al value del input pelicula
    });

    $('#formReserva').submit(function(){
        let mensaje = 'Reserva exitosa\nEl resumen de su compra:\n';
        mensaje+='Pelicula: '+$(this).find('#pelicula').val()+'\n';
        mensaje+='Horario: '+$(this).find('#horario').val()+'\n';
        mensaje+='Cantidad de asientos: '+$(this).find('#asientos').val()+'\n';
        mensaje+='¡Gracias por su compra!';
        alert(mensaje);
    });
});