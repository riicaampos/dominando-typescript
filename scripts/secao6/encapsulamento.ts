// PUBLIC ---------------------------------------------------------------
class Veiculo{

  public cor: String

  constructor(cor: String){
      this.cor = cor
  }

  public tentarAbrirPorta() : boolean {
      return false
  }

}
//-------------------------------------------------------------------------

// PROTECTED --------------------------------------------------------------
class Domicilio{

    corCasa : string
    endereco :  object

    constructor(corCasa : string, endereco : object){
        this.corCasa = corCasa
        this.endereco = endereco
    }

    public tocarInterfone() : string{
        return "Interfone tocado"
    }

}

//Quando você não define o construtor manualemnte, ele chama a classe pai automaticamente
class Casa extends Domicilio{


    public entrarNaCasa() : string{
       return this.atendeInterfone("Ola")
    }

    protected atendeInterfone(mensagem  : string) : string{
        return mensagem
    }
    

}

const minhaCasa = new Casa("Verde",{ciade:"Bairro"});
console.log(minhaCasa.tocarInterfone())
console.log(minhaCasa.entrarNaCasa())
// -----------------------------------------------------------------------------

// PRIVATE
class Banco{

     private cofreQnt : number = 10000
     
     
     private tirarDoCofre(qnt : number) : number | string {

           if(qnt > this.cofreQnt){
                return "Não temos $$"
           }else{
              return this.cofreQnt -= qnt
           }

     }

     protected sacarCaixa(qnt : number){
         return this.tirarDoCofre(qnt)
     }

     sacarCaixaEletronico(qnt : number) {
         return this.tirarDoCofre(qnt)
     }

}

class Banco24Hrs extends Banco{

      sacar(qnt : number){
          return this.sacarCaixa(qnt)
      }


}

const saq = new Banco24Hrs();
console.log(saq.sacar(100000))
console.log(saq.sacar(1000))
