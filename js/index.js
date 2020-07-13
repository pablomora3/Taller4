function abrirlogin(){
    location.href = "login.html";
    }

function abrirregistro(){
    location.href = "registro.html";
    }

function abrirvista(){
    location.href = "jugador.html";

}
function home(){
    location.href = "index.html";
    }

function cerrar() {
    if (confirm("Esta seguro de cerrar la ventana?")) {
        window.open('','_parent',''); 
        window.close(); 
    }
}