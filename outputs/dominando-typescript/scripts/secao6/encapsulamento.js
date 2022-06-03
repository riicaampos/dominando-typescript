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
// PUBLIC ---------------------------------------------------------------
var Veiculo = /** @class */ (function () {
    function Veiculo(cor) {
        this.cor = cor;
    }
    Veiculo.prototype.tentarAbrirPorta = function () {
        return false;
    };
    return Veiculo;
}());
//-------------------------------------------------------------------------
// PROTECTED --------------------------------------------------------------
var Domicilio = /** @class */ (function () {
    function Domicilio(corCasa, endereco) {
        this.corCasa = corCasa;
        this.endereco = endereco;
    }
    Domicilio.prototype.tocarInterfone = function () {
        return "Interfone tocado";
    };
    return Domicilio;
}());
//Quando você não define o construtor manualemnte, ele chama a classe pai automaticamente
var Casa = /** @class */ (function (_super) {
    __extends(Casa, _super);
    function Casa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Casa.prototype.entrarNaCasa = function () {
        return this.atendeInterfone("Ola");
    };
    Casa.prototype.atendeInterfone = function (mensagem) {
        return mensagem;
    };
    return Casa;
}(Domicilio));
var minhaCasa = new Casa("Verde", { ciade: "Bairro" });
console.log(minhaCasa.tocarInterfone());
console.log(minhaCasa.entrarNaCasa());
// -----------------------------------------------------------------------------
// PRIVATE
var Banco = /** @class */ (function () {
    function Banco() {
        this.cofreQnt = 10000;
    }
    Banco.prototype.tirarDoCofre = function (qnt) {
        if (qnt > this.cofreQnt) {
            return "Não temos $$";
        }
        else {
            return this.cofreQnt -= qnt;
        }
    };
    Banco.prototype.sacarCaixa = function (qnt) {
        return this.tirarDoCofre(qnt);
    };
    Banco.prototype.sacarCaixaEletronico = function (qnt) {
        return this.tirarDoCofre(qnt);
    };
    return Banco;
}());
var Banco24Hrs = /** @class */ (function (_super) {
    __extends(Banco24Hrs, _super);
    function Banco24Hrs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Banco24Hrs.prototype.sacar = function (qnt) {
        return this.sacarCaixa(qnt);
    };
    return Banco24Hrs;
}(Banco));
var saq = new Banco24Hrs();
console.log(saq.sacar(100000));
console.log(saq.sacar(1000));
