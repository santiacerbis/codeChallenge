document.getElementById("Formulario").addEventListener("submit",function(event){event.preventDefault();
   
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let nacimiento = document.getElementById("nacimiento").value;

    let DATOS = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: nacimiento,
    };


  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(DATOS),
    headers: {"Content-type": "application/json; charset=UTF-8"},
  })

  .then(response => response.json()) 
  .then(DATOS => {
            console.log ("Se envio correctamente", (DATOS));
        })
  .catch(error => {
            console.log ("No se pudo enviar", (error));
});
})