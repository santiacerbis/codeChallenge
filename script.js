// traigo al formulario por su id y agrego el evento submit para cuando se envie el formulario 
document.getElementById("Formulario").addEventListener("submit",function(event){event.preventDefault();
   // creo las variables trayendolas con sus id correspondientes
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let nacimiento = document.getElementById("nacimiento").value;

    // creo el objeto DATOS con la información del formulario
    let DATOS = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: nacimiento,
    };

// realizo la solicitud con metodo POST
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(DATOS), // de esta manera se convierte el objeto "DATOS" a JSON
    headers: {"Content-type": "application/json; charset=UTF-8"},
  })
// se procesesa la respuesta y agrego mensaje para conclusión o error
  .then(response => response.json()) 
  .then(DATOS => {
            console.log ("Se envio correctamente", (DATOS));
        })
  .catch(error => {
            console.error ("No se pudo enviar", (error));
});
})