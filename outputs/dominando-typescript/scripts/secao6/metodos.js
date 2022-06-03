"use strict";
var Professor = /** @class */ (function () {
    function Professor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    Professor.prototype.seApresentar = function () {
        return "Ol\u00E1 meu nome \u00E9 ".concat(this.nome, ", tenho ").concat(this.idade, " anos e vou ensinar ").concat(this.materia);
    };
    Professor.prototype.calculaNota = function () {
        var notas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            notas[_i] = arguments[_i];
        }
        var result = notas.reduce(function (notaTotal, notaAtual) { return notaTotal + notaAtual; });
        return result / notas.length;
    };
    return Professor;
}());
var ricardo = new Professor('Ricardo Campos', 30, 'Java');
console.log(ricardo.seApresentar());
console.log(ricardo.calculaNota(3, 8, 3.4, 7));
