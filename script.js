document.getElementById("formAnuncio").onsubmit = function () {
    var nome = document.forms["formAnuncio"]["nome"].value;
    var telefone = document.forms["formAnuncio"]["telefone"].value;
    var email = document.forms["formAnuncio"]["campo_email"].value;

    // Validação do nome
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
        alert("Por favor, insira apenas letras no campo Nome.");
        return false; // impede o envio do formulário
    }

    // Validação do telefone
    if (!/^\d+$/.test(telefone)) {
        alert("Por favor, insira apenas números no campo Telefone.");
        return false; // impede o envio do formulário
    }

    // Validação do e-mail
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false; // impede o envio do formulário
    }
};
