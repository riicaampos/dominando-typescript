"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cadastro = /** @class */ (function () {
    function Cadastro(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
    return Cadastro;
}());
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nome, dataNasc, email, empresa) {
        var _this = _super.call(this, nome, dataNasc) || this;
        _this.email = email;
        _this.empresa = empresa;
        return _this;
    }
    return Cliente;
}(Cadastro));
// Quando for usar a data, no caso do mes considerar que Janeiro começa no 0 por conta do array
var cli1 = new Cliente('Ricardo', new Date(1991, 8, 24), 'ricampos@email.com', 'Minha Empresa');
console.log(cli1);
