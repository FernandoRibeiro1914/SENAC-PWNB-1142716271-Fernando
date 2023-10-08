document.addEventListener("DOMContentLoaded", function() {
    var enviarBtn = document.getElementById("enviarBtn");
    var senhaInput = document.getElementById("senhaInput");
    var nomeInput = document.getElementById("nomeInput");
    
    enviarBtn.addEventListener("click", function() {
        enviarDados();
    });

    nomeInput.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            senhaInput.focus();
        }
    });

    senhaInput.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            enviarDados();
        }
    });

    function enviarDados() {
        var nome = nomeInput.value;
        var senha = senhaInput.value;

        window.alert("Olá " + nome + "!");

        console.log("Nome:", nome);
        console.log("Senha:", senha);
        nomeInput.focus();
    }
});
