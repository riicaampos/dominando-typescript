"use strict";
// Se você tiver usando modificadores de acesso, você pode remover a declaração da classe
//e deixando apenas na declaração do construtor
class Pedido {
    constructor(produto, valorTotal, previsaoEntrega) {
        this.produto = produto;
        this.valorTotal = valorTotal;
        this.previsaoEntrega = previsaoEntrega;
        this.produto = produto;
        this.valorTotal = valorTotal;
        this.previsaoEntrega = previsaoEntrega;
    }
}
const meuPedido = new Pedido("Televisão", 2000, new Date("2022-05-03"));
console.log(meuPedido);
