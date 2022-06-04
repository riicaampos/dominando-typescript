"use strict";
class BancoDeDados {
    constructor(ip, usuario, senha, tipoBanco) {
        this.ip = ip;
        this.usuario = usuario;
        this.senha = senha;
        this.tipoBanco = tipoBanco;
    }
    static factory(parametros) {
        //ele valida se oq foi passado esta dentro do array
        if (![BancoDeDados.TIPO_MYSQL, BancoDeDados.TIPO_ORACLE].includes(parametros.tipoBanco)) {
            throw new Error("Tipo inválido");
        }
        return new BancoDeDados(parametros.ip, parametros.usuario, parametros.senha, parametros.tipoBanco);
    }
}
BancoDeDados.LOCAL = "127.0.0.1";
BancoDeDados.TIPO_MYSQL = "MySql";
BancoDeDados.TIPO_ORACLE = "Oracle";
const banco = BancoDeDados.factory({
    tipoBanco: BancoDeDados.TIPO_ORACLE,
    senha: "root",
    usuario: "admin",
    ip: BancoDeDados.LOCAL
});
console.log(banco);
