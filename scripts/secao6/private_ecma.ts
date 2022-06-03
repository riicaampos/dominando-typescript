class Documento {

    private valor: string = "1236544789-01"; // TS
    #numero: number = 35; // ECMAScript

    mostrarDocumento() {

        return this.#numero;

    }

}

class CNPJ extends Documento {

    // private valor: string = "25698745632-01";
    #numero: number = 50;

    mostrarCNPJ() {

        return this.#numero;

    }

}

const rg = new Documento();

console.log(rg.mostrarDocumento());

const cnpj = new CNPJ();

console.log(cnpj.mostrarCNPJ());

//usando apenas o private, compilador acusa o erro mais você acessa o valor do mesmo jeito
//caso queira garantir mesmo que não vá ser acessado usar o # do ecmascript
//console.log("RG:" + rg.valor);
//console.log("RG:" + rg.#numero);