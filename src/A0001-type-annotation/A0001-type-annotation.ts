/* eslint-disable */

// Tipos básicos
let nome: string = "John Doe"; // qualquer tipo de string
let idade: number = 19; // 10, 1.57, -5.5, -9, 0xf00d, 0b1010
let adulto: boolean = true; // true, false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n;

// Arrays
let arr1: Array<Number> = [1, 2, 3, 4, 5];
let arr2: Number[] = [1, 2, 3, 4, 5]
let arr3: Array<string> = ['a','b','c'];
let arr4: String[] = ['a','b','c'];

// Objetos // ? significa que o parametro é opcional
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: "John Doe",
  idade: 19,
  // adulto: true
}

// Funções
function sum(x: number, y: number) {
  return x + y;
}

const sum2: (x: number, y: number) => number = (x, y) => x + y;

const result = sum(10,5);

