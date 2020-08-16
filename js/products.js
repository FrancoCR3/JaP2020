var productosArray = [];

function mostrarProductos(array){
    let productos = "";
    for(let i = 0; i < array.length; i++){
        let producto = array[i];

        productos += "<p>Nombre: " +  producto.name + "</p> <br>";
        productos += "<p>Descripción: " +  producto.description + "</p><br>";
        productos += "<p>Precio" + producto.cost + producto.currency + "</p><br><hr>";
        
    }
    document.getElementById("losProductos").innerHTML = productos
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productosArray = resultObj.data;
            mostrarProductos(productosArray);
        }
    })
});









