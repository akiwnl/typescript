/* eslint-disable */


let x; // undefined
console.log(x);

if (typeof x === "undefined") x = 20;
console.log(x);

export function createPerson(firstName: string, lastName?: string) {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === "number") return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf("2");
console.log(squareOfTwoNumber);
console.log(squareOfTwoString);
