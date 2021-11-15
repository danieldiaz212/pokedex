function ocultarTipos() {
    var x = document.getElementById("categorias");
    if (x.style.display === "none") {
        x.style.display = "grid";
    } else {
        x.style.display = "none";
    }
}