"use strict";
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    Pessoa.prototype.toString = function () {
        return "Meu nome \u00E9 " + this.nome + ", tenho " + this.idade + " e tenho " + this.altura + " de altura";
    };
    return Pessoa;
}());
var ronaldo = new Pessoa('Ronaldo', 24, 1.93);
var marcus = new Pessoa('Marcus', 30, 1.70);
console.log(JSON.stringify(ronaldo));
console.log(JSON.stringify(marcus));
console.log(ronaldo.toString());
