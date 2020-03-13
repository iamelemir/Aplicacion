function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    lienzo.strokeRect(100, 100, 120, 120);
    lienzo.fillRect(110, 110, 100, 100);
    lienzo.clearRect(120, 120, 80, 80);

    lienzo.fillStyle = "#000099";
    lienzo.strokeStyle = "#990000";
}
window.addEventListener("load", iniciar, false);