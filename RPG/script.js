function selecionarClasse() {
    let nome = document.getElementById("nome").value;
    let classe = document.getElementById("classes").value;
    let magia = document.getElementById("magias").value;
    let habilidade = document.getElementById("habilidades").value;

    if (!nome || !classe || !magia || !habilidade) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    let textoFinal =
        "O destemido " + classe + " " + nome +
        " derrotou o Enzo Avanze com sua magia de " +
        magia + ", utilizando sua habilidade " + habilidade + "!";

    document.getElementById("resultado").textContent = textoFinal;
}
