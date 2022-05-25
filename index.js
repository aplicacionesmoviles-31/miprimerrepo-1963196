var z = 0;
function suma(x, y){
   z = x + y;
   console.log(z);
}

function saludar() {
    alert("Hola, mundo");
}

//DOM
var btnSumar = document.getElementById("btnSumar");

var btnSaludar = document.getElementById("btnSaludar");
var ejemploTxt = document.getElementById("ejemploTxt");
 
var texto = "";
/*
btnSaludar.addEventListener("click", function(){
   // console.log("holaaaaaa -- Event Listener");

  //btnSaludar.style.backgroundColor = "red";
  if (btnSaludar.classList.contains("bgRojo") ) {
      btnSaludar.classList.remove("bgRojo");
  }else {
      btnSaludar.classList.add("bgRojo");
  }
});

ejemploTxt.addEventListener("focus", function(){
    console.log("A escribir...");
});

ejemploTxt.addEventListener("keypress" , function(){
    texto = ejemploTxt.value;
    console.log(texto);
});*/

function testImprimir(){
    console.log("Escribiendo....")
}

function imprimirTexto() {
    var texto = ejemploTxt.value;
    console.log(texto);
}



//------------
var articuloTxt = document.getElementById("articulo");
var precioTxt = document.getElementById("precio");

var parrafoTotal = document.getElementById("parrafoTotal");
var ticket = document.getElementById("ticket");

var precio = precioTxt.value;
var total = 0;

function calcularTotal() {
    //Calcular
    precio = parseInt(precioTxt.value);
    total = total + precio;

//Agregar elemento al ticket
var elemento = document.createElement("li");
elemento.innerText = articuloTxt.value + " : $" + precio;
ticket.appendChild(elemento);

//actualizar elemento 
    //Actualizar pagina con total
    parrafoTotal.innerText = "Total: " + total ;


    //Limpiar Textos
    limpiarTextos();
}

function limpiarTextos() {
    articuloTxt.value = "";
    precioTxt.value = "";
}
 

var limpiarLista = document.getElementById("limpiarLista");
limpiarLista.addEventListener("click", function(){
    ticket.innerHTML = "";
    parrafoTotal.innerHTML = "Total:";
})