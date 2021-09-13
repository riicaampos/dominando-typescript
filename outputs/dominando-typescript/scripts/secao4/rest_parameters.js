"use strict";
/**
 * Rest Parameters
 * Spread Operator (operador de espalhamento), é usado ... antes do nome do parametro
 * ele entende que cada um dos parametros passado, separado por , é um novo
 * item e adiciona a um array
 */
function somaRenda() {
    var meses = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        meses[_i] = arguments[_i];
    }
    /**
     * Metodo reduce, o primeiro parametro recebe o valor agregado,
     * o segundo é o valor atual, ou seja o valor que ele está percorrendo no array.
     * Passa a condição no caso estou adicioando cada valor percorrido a variavel rendaTotal
     * e o segundo argumento após a , é o indice do array que você quer que comece
     */
    return meses.reduce(function (rendaTotal, pos) { return rendaTotal + pos; }, 1);
}
console.log(somaRenda(10, 20, 30));
