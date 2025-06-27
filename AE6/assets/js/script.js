/*
    1. $().ready();
    2. $().ready(function(){});
    3. $(document).ready(function(){});
 */

$(document).ready(function(){
    //Efecto
    $("#p1").click(function() {
        //alert("¡Has hecho clic en un botón!");
        $('#p1').text('Hola Mundo');
    });

    $('#btn1').click(function(){
        $('#p1').hide(); //Oculta el elemento
    });

    $('#btn2').click(function(){
        $('#p1').show(); //Muestra el elemento
    });

    $('#btn3').click(function(){
        $('#p1').toggle(); //Oculta y muestra
    });

    $('#btn4').click(function(){
        $('#p1').slideUp();
    });

    $('#btn5').click(function(){
        $('#p1').slideDown();
    });

    $('#btn6').click(function(){
        $('#p1').slideToggle();
    });
    //CSS
    //Manipulación
    //Eventos

//Fin JQuery
});