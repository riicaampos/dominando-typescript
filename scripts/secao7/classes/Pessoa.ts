export class Pessoa{

  cpf : string = ""
  
  constructor(public nome : string, public idade : number){}

  static digaOi(){
      return `Ola Classe`
  }
  
}