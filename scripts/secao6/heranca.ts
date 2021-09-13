class Cadastro {

    nome: string
    nascimento: Date

    constructor(nome: string, nascimento:Date){
         this.nome = nome
         this.nascimento = nascimento
    }

}

class Cliente extends Cadastro {

     email: string
     empresa: string

     constructor(nome: string, dataNasc: Date, email: string, empresa: string){
          super(nome, dataNasc)
          this.email = email
          this.empresa = empresa
     }

}

// Quando for usar a data, no caso do mes considerar que Janeiro começa no 0 por conta do array
const cli1 = new Cliente('Ricardo', new Date(1991, 8, 24), 'ricampos@email.com','Minha Empresa')

console.log(cli1)