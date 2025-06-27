$(document).ready(function () {
    const imagenes = $('.miniatura'); // Selecciona todas las imágenes miniatura
    let indiceActual = 0; // Variable que guarda el índice de la imagen que se está viendo

    // Cuando se hace clic en una imagen miniatura
    imagenes.click(function () {
        indiceActual = parseInt($(this).data('index')); // Guarda el índice de la imagen que se clickeó
        const src = $(this).attr('src'); // Obtiene la ruta (src) de esa imagen
        $('#modalImg').attr('src', src); // Muestra esa imagen en el modal
    });

    // Cuando se hace clic en el botón "Siguiente"
    $('#nextBtn').click(function () {
        // Si está en la última imagen, vuelve a la primera
        if (indiceActual + 1 >= imagenes.length) {
            indiceActual = 0;
        } else {
            indiceActual = indiceActual + 1; // pasa a la siguiente imagen
        }
        const nuevaSrc = $(imagenes[indiceActual]).attr('src');
        $('#modalImg').attr('src', nuevaSrc); // Muestra la nueva imagen en el modal
    });

    // Cuando se hace clic en el botón "Anterior"
    $('#prevBtn').click(function () {
        // Si está en la primera imagen, va a la última
        if (indiceActual === 0) {
            indiceActual = imagenes.length - 1;
        } else {
            indiceActual = indiceActual - 1; // va a la imagen anterior
        }
        const nuevaSrc = $(imagenes[indiceActual]).attr('src');
        $('#modalImg').attr('src', nuevaSrc); // Muestra la nueva imagen en el modal
    });
});
