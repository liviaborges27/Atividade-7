/* 4 - Faça um programa que pergunte em que turno você estuda. Peça para digitar M-matutino
ou V-Vespertino ou N- Noturno. Imprima a mensagem ;Bom Dia!, ;Boa Tarde!; ou ;Boa
Noite!; ou Valor Inválido! conforme o caso 

Nome: Lívia Borges Matos- N°19*/

const teclado = require('prompt-sync')();

console.log("Por favor, informe qual o turno em que você estuda: ");
let pergunta: string = teclado("Digite M para Matutino, V para Vespertino ou N para Noturno: ");

if (pergunta == "M" || pergunta == "m") {
    console.log("Bom Dia!");
} else if (pergunta == "V" || pergunta == "v") {
    console.log("Boa Tarde!");
} else if (pergunta == "N" || pergunta == "n") {
    console.log("Boa Noite!");
} else {
    console.log("A letra informada não possui um período escolar definido.");
}