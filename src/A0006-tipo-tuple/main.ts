const dadosCliente: readonly [number, string, number[]?] = [1, "John"];
const dadosCliente1: [number, string, string] = [1, "John", "Doe"];
const dadosCliente2: [number, string, number[]] = [1, "John", [1, 2, 3]];
const dadosCliente3: [number, string, ...string[]] = [1, "John", "Doe"];

// dadosCliente.pop(); // nao da pra mudar pq é readonly
// dadosCliente[1] = 100; // vai dar erro
// dadosCliente1.pop();
console.log(dadosCliente);
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
