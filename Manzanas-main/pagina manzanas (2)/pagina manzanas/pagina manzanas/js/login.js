function verContra(){
    var mostrar = document.getElementById("contraseña")
    var boton = document.getElementById("boton_ver")

    if(mostrar.type == "password"){
        mostrar.type = "text";
        boton_ver.textContent = "Ocultar" 
    }
    else{
        mostrar.type = "password";
        boton_ver.textContent = "Ver" 
    }
}