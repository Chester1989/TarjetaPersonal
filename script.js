const boton= document.getElementById("botonMensaje");
const mensaje= document.getElementById("mensaje");

//Añadimos un evento que se activa al hacer click en el botón
boton.addEventListener("click",()=>{
    mensaje.textContent="¡Gracias por visitar mi Tarjeta Personal!";
});