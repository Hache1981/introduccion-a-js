//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.
/*
function sumar (numero1, numero2, numero3,numero4,numero5){
    return numero1 + numero2 + numero3 + numero4 + numero5; 
}
*/
document.querySelector('#calcular-videos"').onclick = function(){ 
    const primerVideo = document.querySelector('#primer-video').value;
    const segundoVideo = document.querySelector('#segundo-video').value;
    const tercerVideo = document.querySelector('#tercer-video').value;
    const cuartoVideo = document.querySelector('#cuarto-video').value;
    const quintoVideo = document.querySelector('#quinto-video').value;

    const tiempoTotalVideos = document.querySelector('#tiempo-videos')
    tiempoTotalVideos.value= primerVideo + segundoVideo + tercerVideo + cuartoVideo + quintoVideo;
    return false;
}
