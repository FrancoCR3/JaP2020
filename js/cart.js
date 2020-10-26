var articulos = []
var subtotal = 200


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

function calcularEnvio(){
  let impuesto = document.getElementsByName("envio");
  for(var i = 0; i < impuesto.length; i++){
    if(impuesto[i].checked){
     impuestoValue =parseFloat(impuesto[i].value)
    }
  }
   envioTotal = impuestoValue * subtotal
  document.getElementById("precioConEnvio").innerHTML = envioTotal
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
    calcularEnvio()
});

document.addEventListener("change",function(e){
  calcularEnvio()
} )

document.getElementById("formaDePago").addEventListener("change", function(){

  let valorFormaDePago = document.getElementById("formaDePago").value
  let formModal = document.getElementById("formModal")

  if(valorFormaDePago == "tarjetaDeCredito"){

    formModal.innerHTML = `<label for="Nombre">Nombre</label>
    <input type="text" class="form-control" id="usuario" placeholder="Nombre" required>
    <div class="valid-feedback">
      Correcto!
    </div>

    <label for="Numero">Numero de la tarjeta</label>
    <input type="number" class="form-control" id="numero" placeholder="Numero de la tarjeta" required>
    <div class="valid-feedback">
      Correcto!
    </div>

    <label for="Credito">Contraseña</label>
    <input type="password" class="form-control" id="contraseña" placeholder="Contraseña" required>
    <div class="valid-feedback">
      Correcto!
    </div>

    `

  }
  else {
    formModal.innerHTML =` <label for="Credito">Banco</label>
    <input type="text" class="form-control" id="Credito" placeholder="Banco" required>
    <div class="valid-feedback">
      Correcto!
    </div>

    <label for="Nombre">Nombre del usuario</label>
    <input type="text" class="form-control" id="usuario" placeholder="Nombre del usuario" required>
    <div class="valid-feedback">
      Correcto!
    </div>

    <label for="Numero">Numero de la tarjeta</label>
    <input type="number" class="form-control" id="numero" placeholder="Numero de la tarjeta" required>
    <div class="valid-feedback">
      Correcto!
    </div>
    
    `
  }

})