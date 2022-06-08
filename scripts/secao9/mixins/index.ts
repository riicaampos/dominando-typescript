import applyMixins from "./apply_mixins"

class Produto{

   vender(qnt : number){
    return `Quantidade de moveis vendido(s) ${qnt}`
   }

   comprar(qnt : number){
    return `Quantidade de moveis comprado(s) ${qnt}`
   }

}

class Movel{

    sentar(){
        return `Sentando no sofa`
    }

    empurrar(metros  : number){
        return `Movel empurrado por ${metros} metros`
    }
}

class Sofa {

   constructor(public nome : string){

   }

}

interface Sofa extends Produto, Movel{

}

applyMixins(Sofa,[Produto,Movel])

const produto = new Sofa("Sofa")

console.log(produto.comprar(4))
console.log(produto.vender(10))
console.log(produto.empurrar(5))