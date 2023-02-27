
document.getElementById("datos_personales").addEventListener("mousemove", function () {
    document.getElementById("datos").innerHTML = "Jacqueline Rojas";
    document.getElementById("1").innerHTML = "Edad: 49 años";
    document.getElementById("2").innerHTML = "Fecha de nacimiento:8/12/1973";
    document.getElementById("3").innerHTML = "Nacionalidad: argentina";
    document.getElementById("1").style.display="";
    document.getElementById("2").style.display="";
    document.getElementById("3").style.display="";
  });

document.getElementById("estudios").addEventListener("mousemove", function () {
  document.getElementById("datos").innerHTML = "Universitario incompleto";
  document.getElementById("1").innerHTML = "licenciatura en kinesiologia y fisiatria, incompleto";
  document.getElementById("2").style.display="none";
  document.getElementById("3").style.display="none";
  });


  document.getElementById("experiencias").addEventListener("mousemove", function () {
    document.getElementById("datos").innerHTML = "Atencion a proveedores y clientes  ";
    document.getElementById("1").innerHTML = "Atencion a proveedores y clientes en casa de comidas";
    document.getElementById("1").style.display=""; 
    document.getElementById("2").style.display="none";
    document.getElementById("3").style.display="none";
  });

  
document.getElementById("contactos").addEventListener("mousemove", function () {
  document.getElementById("datos").innerHTML = "mi mail: aurojaq@gmail.com";
  document.getElementById("1").style.display="none";
  });

  