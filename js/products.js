var productosArray = [];
    var precioMax =document.getElementById("pMax").value
    var precioMin =document.getElementById("pMin").value 


function mostrarProductos(array){
    let productos = "";
    for(let i = 0; i < array.length; i++){
        let producto = array[i];
        
        
         
        if (((precioMin == "" || (precioMin != "" && parseInt(producto.cost) >= precioMin)) &&
            ((precioMax == "") || (precioMax != "" && parseInt(producto.cost) <= precioMax)))){
    
        
            productos += "<img src= " + producto.imgSrc + "alt='Foto del producto' >";
        productos += "<p>Nombre: " +  producto.name + "</p> <br>";
        productos += "<p>Descripción: " +  producto.description + "</p><br>";
        productos += "<p>Precio" + producto.cost + producto.currency + "</p><br><hr>";
        }
    }
    document.getElementById("losProductos").innerHTML = productos
}

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productosArray = resultObj.data;
            mostrarProductos(productosArray);
        }
    })
});

//Filtro

document.getElementById("bFiltrar").addEventListener("click", function () {
     
    if ((precioMax != "") && (parseInt(precioMax)) >= 0) {
        precioMax = parseInt(precioMax);
    }
    else {
        precioMax = "";
    }

    if ((precioMin != "") && (parseInt(precioMin)) >= 0) {
        precioMin = parseInt(precioMin);
    }
    else {
        precioMin = "";
    }
    mostrarProductos(productosArray)

})
