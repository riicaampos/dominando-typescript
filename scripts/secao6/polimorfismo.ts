class Empresa{

     prestaServico(){
         return "Empresa servico"
     }

}

class Padaria extends Empresa {

    prestaServico() {
        return "Vendendo pão"
    }

}

class Mercearia extends Empresa{

    prestaServico(){
        return "vendendo alimentos"
    }

}

console.log(new Empresa().prestaServico())
console.log(new Padaria().prestaServico())
console.log(new Mercearia().prestaServico())