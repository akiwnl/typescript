/* eslint-disable */
const objeto: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: "valor A",
  chaveB: "valor B",
};
// console.log((objeto.chaveA = "Novo valor")); // readonly faz com que a chave nao possa ser alterada.
console.log((objeto.chaveC = "valor C"));
console.log((objeto.chaveD = "valor D"));
console.log((objeto.valorE = "valor E"));
