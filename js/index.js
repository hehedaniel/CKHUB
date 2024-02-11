//Esta función cambia la clase del body en función del tema que deba estar
function modoOscuro() {
  let body = document.getElementById("body");
  let modo = body.getAttribute("class");

  if (modo == "modoDia") {
    body.classList.remove("modoDia");
    body.classList.add("modoOscuro");
    localStorage.setItem('modoOscuro', 'true');
  } else {
    body.classList.remove("modoOscuro");
    body.classList.add("modoDia");
    localStorage.setItem('modoOscuro', 'false');
  }
  return false;
}

//Esta función sirve para comprobar que modo debe estar activo
function checkModo() {
  let body = document.getElementById("body");

  if (localStorage.getItem("modoOscuro") === "true") {
    body.classList.remove("modoDia");
    body.classList.add("modoOscuro");
  } else {
    body.classList.remove("modoOscuro");
    body.classList.add("modoDia");
  }
  return false;
}

//Este array es el que guarda las rutas de las imágenes para mostrar en el slider
var imgRutas = [
  "imagenes/teclados/sofle/sofle.webp",
  "imagenes/teclados/corne/corne2.webp",
  "imagenes/teclados/planck/planck4.webp",
  "imagenes/teclados/tokyo60/tokyo60.webp",
  "imagenes/teclados/zeal60/zeal60.webp"
];

var posicion = localStorage.getItem("posicionSlider") || 0;

//Función ejecutada al pulsar el botón de cambiar imagen en el slider
function cambiarImagen(direccion) {
  if (direccion === "anterior") {
    posicion = (posicion - 1 + imgRutas.length) % imgRutas.length;
  } else if (direccion === "siguiente") {
    posicion = (posicion + 1) % imgRutas.length;
  }

  var imgMostrar = document.getElementById("imgSlider");
  imgMostrar.src = imgRutas[posicion];

  localStorage.setItem('posicionSlider', posicion);
}

checkModo();
cambiarImagen("");