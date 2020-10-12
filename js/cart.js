var articulos = []



//hacer la suma
function sumarArticulos(precio, i){
    let cantidad = parseInt(document.getElementById(`cantidadDeArticulos${i}`).value);
    subtotal = cantidad * precio;      
    document.getElementById(`subtotal${i}`).innerHTML = subtotal;

}


//mostrarTabla
function mostrarTabla(array){
let laTabla = ""
for(let i = 0; i < array.length; i++){
    let losArticulos = array[i];
    
    laTabla += ` 
    <table class="table">
    <thead>
      <tr>
        <th></th>
        <th>Nombre</th>
        <th>Cantidad</th>
        <th>Precio</th>
        <th>SubTotal</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>${losArticulos.name}</td>
        <td><input onchange="sumarArticulos(${losArticulos.unitCost}, ${i})" 
        type="number" id="cantidadDeArticulos${i}" value="${losArticulos.count}" min="1"></td>
        <td>${losArticulos.unitCost}</td>
        <td id="subtotal${i}">${losArticulos.unitCost * losArticulos.count} </td>
      </tr>
      
      </tr>
    </tfoot>
  </table> `
    
     
    
}
document.getElementById("mostrarTabla").innerHTML= laTabla

}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            articulos = resultObj.data
            mostrarTabla(articulos.articles)
        }
    });

});