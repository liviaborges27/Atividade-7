/* 2 – (se fez a 9 dá lista anterior conforme esse, pula essa) Para doar sangue é necessário ter
entre 18 e 67 anos e possuir mais de 60Kg. Faça um aplicativo que pergunte a idade de uma
pessoa e seu peso e diga se ela pode doar sangue ou não, e diga o motivo da negativa (menor
de 17 anos; maior que 67 anos, maior que 67 anos e peso inferior; menor de 17 anos e peso
inferior) 

Aluno:Lívia Borges Matos N° 19 */

const teclado = require('prompt-sync')();
console.log("Digite sua idade e seu peso: ");
let idade = parseInt(teclado("Digite sua idade: "));
let peso = parseInt(teclado("Digite seu peso: "));
if(idade >= 18 && idade <= 67 && peso > 60) {
    console.log("Você pode doar sangue.");
} else {
    if(idade < 18 || idade > 67) {
        console.log("Você não pode doar sangue por causa da sua idade.");
    } 
    if(peso <= 60) {
        console.log("Você não pode doar sangue por causa do seu peso.");
    }
};