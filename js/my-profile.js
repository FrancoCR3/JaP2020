//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    let miPerfil = localStorage.getItem("miPerfil")
    let mostrarNyA = document.getElementById("mostrarNyA")
    let mostrarEdad = document.getElementById("mostrarEdad")
    let mostrarMiMail = document.getElementById("mostrarMiMail")
    let mostrarTelefono = document.getElementById("mostrarTelefono")


    if (miPerfil) {

        miPerfil = JSON.parse(miPerfil);
        mostrarNyA.innerHTML = miPerfil.NombresYApellidos
        mostrarEdad.innerHTML = miPerfil.Edad
        mostrarMiMail.innerHTML = miPerfil.MiMail
        mostrarTelefono.innerHTML = miPerfil.Telefono

        

    }



document.getElementById("editarPerfil").addEventListener("click", function (e){
    let nombresYapellidos = document.getElementById("NyA")
    let edad = document.getElementById("Edad")
    let miMail = document.getElementById("miMail")
    let telefono = document.getElementById("telefono")
    let todoCompleto = true

    if (nombresYapellidos.value == ""){
        todoCompleto = false;
    }

    if (edad.value == ""){
        todoCompleto = false;
    }

    if (miMail.value == ""){
        todoCompleto = false;
    }

    if (telefono.value == ""){
        todoCompleto = false;
    }

    if(todoCompleto){
        localStorage.setItem("miPerfil", JSON.stringify({

            NombresYApellidos: nombresYapellidos.value,
            Edad: edad.value,
            MiMail: miMail.value,
            Telefono: telefono.value
        }))
        window.location = "my-profile.html"
    }

    if(todoCompleto === false){
        alert("Debe llenar los campos")
    }
})
});