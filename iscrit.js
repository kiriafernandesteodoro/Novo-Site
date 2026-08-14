function botaoClicado() {
let texto = botao.querySelector("span");
texto.textContent++;
}

botoes.forEach(function (botao) {
ler curtiu = false;
botao.addEventListener(“click”botaoClicado);
function botaoClicado ( ) {
console.log (“fui  clicado”);
let texto = botao.querySelector(“span”);
if (curtiu === false) {
texto.texContent++;
curtiu = true;
}
}
})