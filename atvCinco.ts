/* O IMC (índice de massa corpórea) indica o grau de obesidade de uma pessoa.
 Este índice é obtido pelo peso (em Kg) dividido pelo quadrado da altura (em metros). 
 A tabela a seguir apresenta as faixas deste índice:
- Abaixo de 18,5: Baixo peso
- Entre 18,5 e 29,99: Sobrepeso
- Acima de 30: Obesidade

Aluno: Lívia Borges Matos N° 19

*/ 


const teclado = require(`prompt-sync`)();

console.log("---------------");
console.log("Calculadora de IMC");
console.log("---------------");

let peso: number = parseFloat(teclado("Por favor, informe o seu peso (em KG): "));
let altura: number = parseFloat(teclado("Por favor, informe a sua altura (em Metros): "));

let imc: number = peso / (altura * altura);

if (imc < 18.5) {
  console.log("A avaliação de seu IMC é de Baixo peso.");
} else if (imc >= 18.5 && imc <= 29.99) {
  console.log("A avaliação de seu IMC é de Sobrepeso.");
} else {
  console.log("A avaliação de seu IMC é de Obesidade.");
}

console.log(`O peso informado é de ${peso} KG`);
console.log(`A altura informada é de ${altura} Metros`);
console.log(`O IMC é correspondente a ${imc}`);