export function criaErro(): never {
  throw new Error("Erro qualquer");
}
criaErro();

// usa never quando voce nao retorna nada por exemplo em loops infinitos ou lancamentos de erros.
