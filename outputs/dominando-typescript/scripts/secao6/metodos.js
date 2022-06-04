"use strict";
class Professor {
    constructor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    seApresentar() {
        return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos e vou ensinar ${this.materia}`;
    }
    calculaNota(...notas) {
        const result = notas.reduce((notaTotal, notaAtual) => notaTotal + notaAtual);
        return result / notas.length;
    }
}
const ricardo = new Professor('Ricardo Campos', 30, 'Java');
console.log(ricardo.seApresentar());
console.log(ricardo.calculaNota(3, 8, 3.4, 7));
