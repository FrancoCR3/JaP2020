var infoProductos = {};
var comentarios = {};
var productosArray ={};
var infoProductos ={};
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
        
        

    
        
        carComentarios += "<p><strong>" + datosComentarios.user + "</strong>: " + datosComentarios.description + "</p><br>"
        + "<p>" + datosComentarios.dateTime + "</p> <p><strong>Puntuación:" + datosComentarios.score + "/5</strong></p> <hr>"
        
    }
    document.getElementById("desplegarComentarios").innerHTML = carComentarios
}

function mostrarProductosRelacionados(productosArray, productosRelacionados){
    let losProductosRelacionados =""

    productosRelacionados.forEach(function(elNumero) {
        losProductosRelacionados += "<a href='products.html'><p>" + productosArray[elNumero].name + "</p>"
        losProductosRelacionados += "<img src="    + productosArray[elNumero].imgSrc + " alt='Foto del producto' style='width: 150px; height: 150px;' >";
        losProductosRelacionados += "<p>Precio:" + productosArray[elNumero].cost + productosArray[elNumero].currency + "</p></a><hr>"


        
    });
    document.getElementById("losProductosRelacionados").innerHTML = losProductosRelacionados
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
            
        
            nombre.innerHTML = "<p><strong>Nombre:</strong>" + infoProductos.name; + "</p>"
            descripcion.innerHTML = "<p><strong>Descripción:</strong>" + infoProductos.description; + "</p>"
            precio.innerHTML = "<p><strong>Precio:</strong>" + infoProductos.cost +  infoProductos.currency + "</p>"
            cantidad.innerHTML = "<p><strong>Cantidad:</strong>" + infoProductos.soldCount  + "</p>"
            categoria.innerHTML =  "<p><strong>Categoria:</strong>" + infoProductos.category; + "</p>"
            mostrarImagenes(infoProductos.images)


            
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productosArray = resultObj.data;
            mostrarProductosRelacionados(productosArray,infoProductos.relatedProducts);
        }
    })
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
