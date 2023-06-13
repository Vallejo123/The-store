// const bar = document.querySelector(".fa-bars");
// const menu = document.querySelector(".menu");


// bar.addEventListener("click", () => {
//   menu.classList.toggle("show-menu");
// });


// Obtener elementos del formulario
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const inventoryInput = document.getElementById("inventory");
const createButton = document.getElementById("btn-create");


// Agregar botón "Create product"
createButton.addEventListener("click", function (event) {
 // Prevenir el envío del formulario
 event.preventDefault();


 // Limpiar mensajes de error previos
 clearErrorMessages();


 // Obtener campos de entrada
 const name = nameInput.value;
 const price = parseFloat(priceInput.value);
 const inventory = parseInt(inventoryInput.value);


 // Validar que no se dejen campos vacíos
 let hasError = false;


 if (name.trim() === "") {
   displayErrorMessage("name", "Campo requerido");
   changeErrorMessageColor("name", "red");
   hasError = true;
 }
 if (isNaN(price)) {
   displayErrorMessage("price", "Campo requerido");
   changeErrorMessageColor("price", "red");
   hasError = true;
 }
 if (isNaN(inventory)) {
   displayErrorMessage("inventory", "Campo requerido");
   changeErrorMessageColor("inventory", "red");
   hasError = true;
 }


 // Mostrar mensaje de creacion
 if (!hasError) {
   alert("¡Producto creado!");


   // Recargar la página para dejar los campos vacíos
   location.reload();
 }
});


// Ojo esta es la función para mostrar un mensaje de error debajo del campo de entrada
function displayErrorMessage(fieldId, message) {
 const errorElement = document.getElementById(`${fieldId}-error`);
 errorElement.innerText = message;
}


// Función para cambiar el color del mensaje de error
function changeErrorMessageColor(fieldId, color) {
 const errorElement = document.getElementById(`${fieldId}-error`);
 errorElement.style.color = color;
}


// Función para limpiar los mensajes de error
function clearErrorMessages() {
 const errorElements = document.querySelectorAll(".error-message");
 errorElements.forEach((element) => {
   element.innerText = "";
   element.style.color = ""; // Restaurar el color original
 });
}
