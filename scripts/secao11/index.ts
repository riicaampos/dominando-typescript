import { debug, log, decoratorAttr, decoratorGetSet, decoratorParam } from "./utils/decorators";
import "reflect-metadata"


@debug
class PrimeiraClasse{
    constructor(){}
}

@log
class SegundaClasse{
    constructor(){}
}

console.log(new SegundaClasse())



class Animal{

   @decoratorAttr
   nome: string

   constructor(nome : string){
       this.nome = nome
   }

}

const dog = new Animal("Trembo")

console.log(dog.nome)

class Login{

 constructor(private _usuario: String, 
             private _senha: string){}

  @decoratorGetSet(true)
  get usuario(){
    return this._usuario
  }           

  @decoratorGetSet(false)
  get senha(){
    return this._senha
  }

}

const login = new Login("ricampos","ricardo1234")

for(let chave in login){
    console.log(`chave ${chave}`)
    // console.log(`chave ${login[chave]}`)
}

class TratarParametros{

   metodo1(@decoratorParam mensagem : string){}
   metodo2(@decoratorParam numero : number){}

}

new TratarParametros()