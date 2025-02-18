alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto= 5;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

//se o chute foir igual ao número secreto
if (chute == numeroSecreto) {
  alert(`Acertou!! O num é ${numeroSecreto}!`);
} else {
  alert('Errou!')
}