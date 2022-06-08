interface CadastroPadrao{
    readonly id : number,
    readonly created_at : Date,
    readonly updated_at :Date

}

interface CadastroUser extends CadastroPadrao{
    nome: string,
    email: string
    senha: string,
}

interface CadastroCategoria extends CadastroPadrao{

}

class Cadastros<T,ID>{

    criar(dado : T){
      console.log("Criando registro")
       return dado
    }

    ler(id : ID) : T{
      console.log(`Procurando pelo id ${id}`)
      return {} as T
    }

    atualizar(id : ID, dados : T){
        console.log(`Editando dados do id ${id}`)
        return dados
    }

    apagar(id : ID) : boolean{
        console.log(`ID ${id} deletado`)
        return true
    }

}

const novoUsuario = new Cadastros<CadastroUser,number>()

const use = novoUsuario.criar({
    id : 1,
    nome : "Ricardo",
    email: "ricampos91@gmail.com",
    senha: "ricardo123",
    created_at : new Date("2022-06-6"),
    updated_at : new Date("2022-06-6")
})

console.log(use)
