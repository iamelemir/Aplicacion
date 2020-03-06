function hacerclic(){
    var el = document.querySelector("div.boton input[name='submit']");
    document.querySelector("#li p:first-child").onclick=mostraralerta;
    }
    function mostraralerta(){
    alert('hizo clic!');
    }
    window.onload=hacerclic;