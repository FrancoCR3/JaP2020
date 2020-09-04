//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
document.getElementById("boton").addEventListener("click", function(e){
    let correo = document.getElementById("Elmail")
    let contraseña = document.getElementById("laContraseña")
    let todoCompleto = true;
    
    if (correo.value == ""){
        todoCompleto = false;
    }

    if (contraseña.value == ""){
        todoCompleto = false;
    }

    if (todoCompleto === true){
        window.location = "inicio.html";
        localStorage.setItem("Usuario", JSON.stringify({ mail: correo.value}))
    }

    if(todoCompleto === false){
        alert("Debe llenar los campos")
    }
}





)
});