"use strict";
class Cadastro {
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Cliente extends Cadastro {
    constructor(nome, dataNasc, email, empresa) {
        super(nome, dataNasc);
        this.email = email;
        this.empresa = empresa;
    }
}
// Quando for usar a data, no caso do mes considerar que Janeiro começa no 0 por conta do array
const cli1 = new Cliente('Ricardo', new Date(1991, 8, 24), 'ricampos@email.com', 'Minha Empresa');
console.log(cli1);
