"use strict";
/**
 * Rest Parameters
*/
function somaRenda() {
    var meses = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        meses[_i] = arguments[_i];
    }
    return meses.reduce(function (rendaTotal, pos) { return (rendaTotal + pos); }, 0);
}
console.log(somaRenda(10, 20, 30));
