/* 6 – Faça um programa que pergunte qual tabuada deseja exibir, e mostre essa tabuada (tente
usar laço de repetição) 

Nome: Lívia Borges Matos N° 19 */ 

const teclado = require(`prompt-sync`)();

console.log("---------------");
console.log("Tabuada");
console.log("---------------");

let tabuada: number = parseInt(teclado("Por favor, informe a tabuada que deseja exibir: "));

for (let numero = 1; numero <= 10; numero++) {
    console.log(`${tabuada} x ${numero} = ${tabuada * numero}`);
}
