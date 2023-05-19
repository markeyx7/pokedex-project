const botaoAlterarTema = document.getElementById
    ("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/img/sun.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/img/moon.png");
    }
});

var imagemSom = document.querySelector('.logo');
var audio = document.getElementById('audio');
imagemSom.addEventListener('click', function() {
  audio.currentTime = 0;
  audio.play();

});

// @markeyx7 s2