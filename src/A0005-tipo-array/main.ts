// Array<T> / T[]

export function multArgs(...args: number[]): number {
  return args.reduce((acc, i) => acc * i, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((acc, letra) => acc + letra);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((letra) => letra.toUpperCase());
}

const resultado = multArgs(1, 2, 3);
const resultadoString = concatenaString("a", "b", "c");
const letraMaiuscula = toUpperCase("a", "b", "c");
console.log(resultado);
console.log(resultadoString);
console.log(letraMaiuscula);
