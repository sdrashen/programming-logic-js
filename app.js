alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for o certo
while (chute != numeroSecreto) {
  chute = prompt('Escolha um número entre 1 e 10');
  //se o chute for igual ao número secreto
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}!`);
    } else {
      alert(`O número secreto é maior que ${chute}!`);
    }
    tentativas++;
  }
}


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Acertou o número secreto ${numeroSecreto} com ${tentativas}  ${palavraTentativa}.`);
//if (tentativas > 1) {
//  alert(`Você acertou em ${tentativas} tentativas! O número secreto era ${numeroSecreto}.`);
//} else {
//  alert(`Você acertou com ${tentativas} tentativa! O número secreto era ${numeroSecreto}.`);
//}