"use strict";
class Permissao {
    constructor(_nome, _nivel) {
        this._nome = _nome;
        this._nivel = _nivel;
    }
    get nome() {
        return this._nome.toUpperCase();
    }
    set nome(novoNome) {
        if (novoNome.length < 5) {
            throw new Error("Deve ter mais de 5 caracteres");
        }
        this._nome = novoNome;
    }
}
const permissao = new Permissao("Admin", 1);
console.log(permissao.nome);
try {
    permissao.nome = "adminnnn";
    console.log(permissao.nome);
}
catch (e) {
    console.log(e.message);
}
