const pessoa = {
  nome: "John",
  sobrenome: "Doe",
  exibirNome(): void {
    console.log(this.nome + " " + this.sobrenome);
  },
};
pessoa.exibirNome();
export { pessoa };
