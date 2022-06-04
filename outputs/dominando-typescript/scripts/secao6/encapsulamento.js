"use strict";
// PUBLIC ---------------------------------------------------------------
class Veiculo {
    constructor(cor) {
        this.cor = cor;
    }
    tentarAbrirPorta() {
        return false;
    }
}
//-------------------------------------------------------------------------
// PROTECTED --------------------------------------------------------------
class Domicilio {
    constructor(corCasa, endereco) {
        this.corCasa = corCasa;
        this.endereco = endereco;
    }
    tocarInterfone() {
        return "Interfone tocado";
    }
}
//Quando você não define o construtor manualemnte, ele chama a classe pai automaticamente
class Casa extends Domicilio {
    entrarNaCasa() {
        return this.atendeInterfone("Ola");
    }
    atendeInterfone(mensagem) {
        return mensagem;
    }
}
const minhaCasa = new Casa("Verde", { ciade: "Bairro" });
console.log(minhaCasa.tocarInterfone());
console.log(minhaCasa.entrarNaCasa());
// -----------------------------------------------------------------------------
// PRIVATE
class Banco {
    constructor() {
        this.cofreQnt = 10000;
    }
    tirarDoCofre(qnt) {
        if (qnt > this.cofreQnt) {
            return "Não temos $$";
        }
        else {
            return this.cofreQnt -= qnt;
        }
    }
    sacarCaixa(qnt) {
        return this.tirarDoCofre(qnt);
    }
    sacarCaixaEletronico(qnt) {
        return this.tirarDoCofre(qnt);
    }
}
class Banco24Hrs extends Banco {
    sacar(qnt) {
        return this.sacarCaixa(qnt);
    }
}
const saq = new Banco24Hrs();
console.log(saq.sacar(100000));
console.log(saq.sacar(1000));
