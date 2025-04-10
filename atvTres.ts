/* 3 - Faça um programa que receba 5 números e retorne o número maior e o número menor.

Aluno: Lívia Borges Matos N° 19*/

const teclado = require('prompt-sync')();

let num1 = parseInt(teclado('Digite o primeiro número: '));
let num2 = parseInt(teclado('Digite o segundo número: '));
let num3 = parseInt(teclado('Digite o terceiro número: '));
let num4 = parseInt(teclado('Digite o quarto número: '));
let num5 = parseInt(teclado('Digite o quinto número: '));


let numeros = [num1, num2, num3, num4, num5];
let maior = numeros[0];
let menor = numeros[0];


for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log(`O número maior é ${maior} e o número menor é ${menor}`);