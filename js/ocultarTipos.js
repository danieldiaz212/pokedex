var fondo = document.getElementById("body");
var agua = document.getElementsByClassName("contenedor-agua ");
var fuego = document.getElementsByClassName("contenedor-fuego");
var planta = document.getElementsByClassName("contenedor-planta");
var volador = document.getElementsByClassName("contenedor-volador");
var acero = document.getElementsByClassName("contenedor-acero");
var dragon = document.getElementsByClassName("contenedor-dragon");
var lucha = document.getElementsByClassName("contenedor-lucha");
var psiquico = document.getElementsByClassName("contenedor-psiquico");
var hada = document.getElementsByClassName("contenedor-hada");
var roca = document.getElementsByClassName("contenedor-roca");
var tierra = document.getElementsByClassName("contenedor-tierra");
var hielo = document.getElementsByClassName("contenedor-hielo");
var veneno = document.getElementsByClassName("contenedor-veneno");
var fantasma = document.getElementsByClassName("contenedor-fantasma");
var normal = document.getElementsByClassName("contenedor-normal");
var electrico = document.getElementsByClassName("contenedor-electrico");
var bicho = document.getElementsByClassName("contenedor-bicho");
function removerFondo() {
  fondo.classList.remove("fondo-acero");
  fondo.classList.remove("fondo-volador");
  fondo.classList.remove("fondo-dragon");
  fondo.classList.remove("fondo-electrico");
  fondo.classList.remove("fondo-normal");
  fondo.classList.remove("fondo-hielo");
  fondo.classList.remove("fondo-psiquico");
  fondo.classList.remove("fondo-hada");
  fondo.classList.remove("fondo-fantasma");
  fondo.classList.remove("fondo-lucha");
  fondo.classList.remove("fondo-veneno");
  fondo.classList.remove("fondo-roca");
  fondo.classList.remove("fondo-tierra");
  fondo.classList.remove("fondo-agua");
  fondo.classList.remove("fondo-fuego");
  fondo.classList.remove("fondo-planta");
  fondo.classList.remove("fondo-bicho");
}
function mostrarTipos() {
  var x = document.getElementById("categorias");
  var mostrar = document.getElementById("mostrar-tipos");
  var ocultar = document.getElementById("ocultar-tipos");
  x.style.display = "grid";
  mostrar.style.display = "none";
  ocultar.style.display = "flex";
}
function ocultarTipos() {
  var x = document.getElementById("categorias");
  var mostrar = document.getElementById("mostrar-tipos");
  var ocultar = document.getElementById("ocultar-tipos");

  x.style.display = "none";
  mostrar.style.display = "flex";
  ocultar.style.display = "none";
}

function mostrarBicho() {
  removerFondo();
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "none";
  }

  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "none";
  }

  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "none";
  }

  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "none";
  }
  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "none";
  }
  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "none";
  }
  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "none";
  }
  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "none";
  }
  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "none";
  }
  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "none";
  }
  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "none";
  }
  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "none";
  }

  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "none";
  }
  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "none";
  }
  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "none";
  }
  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "none";
  }
  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "grid";
  }
  fondo.classList.add("fondo-bicho");
}
function mostrarPlanta() {
  removerFondo();
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "none";
  }

  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "none";
  }

  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "none";
  }
  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "none";
  }
  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "none";
  }
  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "none";
  }
  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "none";
  }
  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "none";
  }
  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "none";
  }
  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "none";
  }
  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "none";
  }

  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "none";
  }
  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "none";
  }
  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "none";
  }
  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "none";
  }
  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "none";
  }
  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "grid";
  }
  fondo.classList.add("fondo-planta");
}
function mostrarFuego() {
  removerFondo();
  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "none";
  }

  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "none";
  }

  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "none";
  }
  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "none";
  }
  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "none";
  }
  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "none";
  }
  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "none";
  }
  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "none";
  }
  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "none";
  }
  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "none";
  }
  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "none";
  }

  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "none";
  }
  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "none";
  }
  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "none";
  }
  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "none";
  }
  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "none";
  }
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "grid";
  }
  fondo.classList.add("fondo-fuego");
}
function mostrarAgua() {
  removerFondo();
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "none";
  }

  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "none";
  }

  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "none";
  }
  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "none";
  }
  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "none";
  }
  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "none";
  }
  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "none";
  }
  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "none";
  }
  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "none";
  }
  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "none";
  }
  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "none";
  }

  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "none";
  }
  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "none";
  }
  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "none";
  }
  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "none";
  }
  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "none";
  }
  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "grid";
  }
  fondo.classList.add("fondo-agua");
}
function mostrarTierra() {
  removerFondo();
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "none";
  }

  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "none";
  }

  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "none";
  }

  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "none";
  }

  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "none";
  }
  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "none";
  }
  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "none";
  }
  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "none";
  }
  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "none";
  }
  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "none";
  }
  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "none";
  }

  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "none";
  }
  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "none";
  }
  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "none";
  }
  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "none";
  }
  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "none";
  }
  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "grid";
  }
  fondo.classList.add("fondo-tierra");
}
function mostrarRoca() {
  removerFondo();
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "none";
  }

  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "none";
  }

  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "none";
  }

  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "none";
  }
  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "none";
  }
  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "none";
  }
  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "none";
  }
  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "none";
  }
  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "none";
  }
  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "none";
  }
  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "none";
  }
  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "none";
  }

  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "none";
  }
  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "none";
  }

  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "none";
  }
  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "none";
  }
  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "grid";
  }
  fondo.classList.add("fondo-roca");
}
function mostrarAcero() {
  removerFondo();
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "none";
  }

  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "none";
  }

  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "none";
  }

  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "none";
  }
  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "none";
  }
  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "none";
  }
  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "none";
  }
  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "none";
  }
  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "none";
  }
  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "none";
  }
  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "none";
  }

  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "none";
  }
  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "none";
  }
  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "none";
  }
  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "none";
  }
  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "none";
  }
  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "grid";
  }
  fondo.classList.add("fondo-acero");
}
function mostrarVolador() {
  removerFondo();
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "none";
  }

  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "none";
  }

  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "none";
  }

  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "none";
  }
  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "none";
  }

  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "none";
  }
  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "none";
  }
  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "none";
  }
  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "none";
  }
  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "none";
  }
  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "none";
  }

  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "none";
  }
  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "none";
  }
  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "none";
  }
  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "none";
  }
  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "none";
  }
  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "grid";
  }
  fondo.classList.add("fondo-volador");
}
function mostrarDragon() {
  removerFondo();
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "none";
  }

  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "none";
  }

  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "none";
  }

  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "none";
  }
  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "none";
  }
  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "none";
  }

  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "none";
  }
  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "none";
  }
  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "none";
  }
  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "none";
  }
  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "none";
  }

  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "none";
  }
  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "none";
  }
  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "none";
  }
  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "none";
  }
  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "none";
  }
  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "grid";
  }
  fondo.classList.add("fondo-dragon");
}
function mostrarElectrico() {
  removerFondo();
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "none";
  }

  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "none";
  }

  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "none";
  }

  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "none";
  }
  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "none";
  }
  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "none";
  }
  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "none";
  }

  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "none";
  }
  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "none";
  }
  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "none";
  }
  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "none";
  }

  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "none";
  }
  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "none";
  }
  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "none";
  }
  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "none";
  }
  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "none";
  }
  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "grid";
  }
  fondo.classList.add("fondo-electrico");
}
function mostrarNormal() {
  removerFondo();
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "none";
  }

  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "none";
  }

  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "none";
  }

  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "none";
  }
  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "none";
  }
  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "none";
  }
  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "none";
  }
  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "none";
  }

  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "none";
  }
  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "none";
  }
  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "none";
  }

  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "none";
  }
  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "none";
  }
  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "none";
  }
  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "none";
  }
  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "none";
  }
  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "grid";
  }
  fondo.classList.add("fondo-normal");
}
function mostrarHielo() {
  removerFondo();
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "none";
  }

  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "none";
  }

  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "none";
  }

  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "none";
  }
  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "none";
  }
  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "none";
  }
  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "none";
  }
  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "none";
  }
  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "none";
  }

  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "none";
  }
  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "none";
  }

  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "none";
  }
  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "none";
  }
  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "none";
  }
  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "none";
  }
  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "none";
  }
  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "grid";
  }
  fondo.classList.add("fondo-hielo");
}
function mostrarPsiquico() {
  removerFondo();
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "none";
  }

  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "none";
  }

  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "none";
  }

  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "none";
  }
  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "none";
  }
  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "none";
  }
  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "none";
  }
  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "none";
  }
  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "none";
  }
  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "none";
  }

  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "none";
  }

  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "none";
  }
  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "none";
  }
  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "none";
  }
  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "none";
  }
  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "none";
  }
  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "grid";
  }
  fondo.classList.add("fondo-psiquico");
}
function mostrarHada() {
  removerFondo();
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "none";
  }

  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "none";
  }

  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "none";
  }

  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "none";
  }
  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "none";
  }
  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "none";
  }
  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "none";
  }
  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "none";
  }
  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "none";
  }
  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "none";
  }
  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "none";
  }

  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "none";
  }
  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "none";
  }
  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "none";
  }
  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "none";
  }
  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "none";
  }
  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "grid";
  }
  fondo.classList.add("fondo-hada");
}
function mostrarFantasma() {
  removerFondo();
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "none";
  }

  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "none";
  }

  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "none";
  }

  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "none";
  }
  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "none";
  }
  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "none";
  }
  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "none";
  }
  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "none";
  }
  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "none";
  }
  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "none";
  }
  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "none";
  }
  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "none";
  }

  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "none";
  }
  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "none";
  }
  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "none";
  }
  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "none";
  }
  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "grid";
  }
  fondo.classList.add("fondo-fantasma");
}
function mostrarLucha() {
  removerFondo();
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "none";
  }

  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "none";
  }

  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "none";
  }

  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "none";
  }
  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "none";
  }
  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "none";
  }
  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "none";
  }
  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "none";
  }
  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "none";
  }
  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "none";
  }
  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "none";
  }
  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "none";
  }

  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "none";
  }

  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "none";
  }
  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "none";
  }
  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "none";
  }
  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "grid";
  }
  fondo.classList.add("fondo-lucha");
}
function mostrarVeneno() {
  removerFondo();
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "none";
  }

  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "none";
  }

  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "none";
  }

  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "none";
  }
  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "none";
  }
  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "none";
  }
  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "none";
  }
  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "none";
  }
  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "none";
  }
  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "none";
  }
  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "none";
  }
  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "none";
  }

  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "none";
  }
  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "none";
  }
  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "none";
  }

  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "none";
  }
  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "grid";
  }
  fondo.classList.add("fondo-veneno");
}
function mostrarTodos() {
  removerFondo();
  for (x = 0; x < fuego.length; x++) {
    fuego[x].style.display = "grid";
  }

  for (x = 0; x < agua.length; x++) {
    agua[x].style.display = "grid";
  }

  for (x = 0; x < planta.length; x++) {
    planta[x].style.display = "grid";
  }

  for (x = 0; x < acero.length; x++) {
    acero[x].style.display = "grid";
  }
  for (x = 0; x < tierra.length; x++) {
    tierra[x].style.display = "grid";
  }
  for (x = 0; x < volador.length; x++) {
    volador[x].style.display = "grid";
  }
  for (x = 0; x < dragon.length; x++) {
    dragon[x].style.display = "grid";
  }
  for (x = 0; x < electrico.length; x++) {
    electrico[x].style.display = "grid";
  }
  for (x = 0; x < normal.length; x++) {
    normal[x].style.display = "grid";
  }
  for (x = 0; x < hielo.length; x++) {
    hielo[x].style.display = "grid";
  }
  for (x = 0; x < psiquico.length; x++) {
    psiquico[x].style.display = "grid";
  }
  for (x = 0; x < hada.length; x++) {
    hada[x].style.display = "grid";
  }

  for (x = 0; x < fantasma.length; x++) {
    fantasma[x].style.display = "grid";
  }
  for (x = 0; x < lucha.length; x++) {
    lucha[x].style.display = "grid";
  }
  for (x = 0; x < roca.length; x++) {
    roca[x].style.display = "grid";
  }
  for (x = 0; x < veneno.length; x++) {
    veneno[x].style.display = "grid";
  }
  for (x = 0; x < bicho.length; x++) {
    bicho[x].style.display = "grid";
  }
}
