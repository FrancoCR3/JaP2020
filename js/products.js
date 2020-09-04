const ORDER_ASC_BY_NAME = "de la A a la Z";
const ORDER_DESC_BY_NAME = "de la Z a la A";
const ORDER_BY_PROD_COUNT = "Relevancia";
var productosArray = [];
var currentSortCriteria = undefined;
    var precioMax =undefined
    var precioMin =undefined


function mostrarProductos(array){
    let productos = "";
    for(let i = 0; i < array.length; i++){
        let producto = array[i];
        
        
         
        if (((precioMin == undefined) || (precioMin != undefined && parseInt(producto.cost) >= precioMin)) &&
            ((precioMax == undefined) || (precioMax != undefined && parseInt(producto.cost) <= precioMax))){
    
        
            productos += "<img src="    + producto.imgSrc + "alt='Foto del producto' >";
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

document.getElementById("bFiltrar").addEventListener("click", function(){
    
    precioMin = document.getElementById("pMin").value;
    precioMax = document.getElementById("pMax").value;

    if ((precioMin != undefined) && (precioMin != "") && (parseInt(precioMin)) >= 0){
        precioMin = parseInt(precioMin);
    }
    else{
        precioMin = undefined;
    }

    if ((precioMax != undefined) && (precioMax != "") && (parseInt(precioMax)) >= 0){
        precioMax = parseInt(precioMax);
    }
    else{
        precioMax = undefined;
    }

    mostrarProductos(productosArray);
});

//borrar
document.getElementById("bBorrar").addEventListener("click", function(){

    document.getElementById("pMin").value = 0
    document.getElementById("pMax").value = 0
    precioMax = undefined
    precioMin = undefined 


})

// el sort (categories.js)

function sortProducts(criteria, y){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = y.sort(function(a, b) {
            if ( a.name < b.name ){ return -1; }
            if ( a.name > b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = y.sort(function(a, b) {
            if ( a.name > b.name ){ return -1; }
            if ( a.name < b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = y.sort(function(a, b) {
            let aCount = parseInt(a.productCount);
            let bCount = parseInt(b.productCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}
function sortAndShowProducts(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        productosArray = categoriesArray;
    }

    productosArray= sortProducts(currentSortCriteria, productosArray);

    
    mostrarProductos(array)
}


document.addEventListener("DOMContentLoaded", function(){
    getJSONData(PRODUCTS_UR).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowProducts(ORDER_ASC_BY_NAME, resultObj.data);
        }
    });

    document.getElementById("precioA").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_NAME);
    });

    document.getElementById("precioD").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_NAME);
    });

    document.getElementById("relevanciaD").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_PROD_COUNT);
    });
})
