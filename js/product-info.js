var infoProductos = {};
var comentarios = {};

function mostrarImagenes(array){
    let imagenes = "";
    for(let i = 0; i < array.length; i++){
        let link = array[i];
        
        

    
        
            imagenes +=  "<img src="    + link + " alt='Foto del auto' >";
        
    }
    document.getElementById("imagenesProducto").innerHTML = imagenes
}

function mostrarComentarios(array){
    let carComentarios = "";
    for(let i = 0; i < array.length; i++){
        let datosComentarios = array[i];
        
        

    
        
        carComentarios += "<p>" + datosComentarios.score + "</p>"
        
    }
    document.getElementById("desplegarComentarios").innerHTML = carComentarios
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            infoProductos = resultObj.data;

            let nombre  = document.getElementById("nombreProducto");
            let descripcion = document.getElementById("descripcionProducto");
            let precio = document.getElementById("precioProducto");
            let cantidad = document.getElementById("cantidadProducto");
            let categoria = document.getElementById("categoriaProducto");
            
        
            nombre.innerHTML = infoProductos.name;
            descripcion.innerHTML = infoProductos.description;
            precio.innerHTML = infoProductos.cost;
            cantidad.innerHTML = infoProductos.soldCount;
            categoria.innerHTML = infoProductos.category;
            mostrarImagenes(infoProductos.images)


            
        }
    });
});

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        { 
            comentarios = resultObj.data;

            mostrarComentarios(comentarios)

            


            
        }
    });
});
