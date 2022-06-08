// precisa ser compilado a mao
// tsc autenticacao.ts --outFile <caminho de destino>/autenticao.js

/// <reference path = "./autenticacao/index.ts"/>

const novoReg = new Autenticacao.LoginRegistro()

const result = novoReg.registro({
    nome : "Ricardo",
    email : "ricampos91@gmail.com",
    senha : "Ric1234",
    dtNasc : new Date("1991-09-24")
})

console.log(result)