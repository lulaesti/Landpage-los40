document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    setTimeout(function () {
      document.getElementById("popup").style.display = "block";
    }, 1000);
  });
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    var nombre = document.getElementById("nombre").value;
    document.getElementById("nombre-titular").innerText = nombre;
    document.getElementById("popup").style.display = "block";
  });
  
  document.getElementById("politicas").addEventListener("change", function () {
    var boton = document.getElementById("submitBtn");
  });
  
  /*En el HTML le agregue si los campos eran requeridos o no con ese required.
  En el css solo toque para que el diseÃ±o se parezca al que me mandaron.
  En JS cree dos funciones el "submit" es un evento del formulario con el id de submit que en este caso es el "quiero acceder", le agregue el e.preventDefault que es para que la pagina no se F5quee como esta en todas las paginas por default. Y despues le agruegue el setTimeout de 1000 milisegundos osea un segundo, que es solo para que le agregue un tiempo de espera para que parezca que hay un proceso detras que seria como una demora en la pagina. 
  Despues con closePopup es simplemente para poder cerrar el pop-up*/