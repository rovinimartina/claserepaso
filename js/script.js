function comprobarUsuario() {
    const usuario = document.getElementById('usuario').value;
    const usuarioCorrecto = "Martina";
    const mensajeError = document.getElementById('mensajeError');
    if (usuario === usuarioCorrecto) {
        document.getElementById('ingresarBtn').style.display = "inline-block";}
        else {
            mensajeError.textContent = "Usuario incorrecto. Inténtalo de nuevo."
        }
    }

/*Funcion que hice yo, aplicada en accesorios.html y pants.html*/
let refdescargaRealizada=document.getElementById("descargaRealizada");

function mostrarDescarga(){
    refdescargaRealizada.innerHTML="¡Descarga realizada con éxito!;"
}

/*Funcion que hizo chatgpt para que salga el mensaje en los 4 botones y lo aplique en PartArriba.html*/
function mostrarMensaje(item) {
    var mensaje = document.getElementById('mensaje' + item);
    mensaje.textContent = "¡Descarga realizada con éxito!";
}