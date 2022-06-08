import { debug, log } from "./utils/decorators";


@debug
class PrimeiraClasse{
    constructor(){}
}

@log
class SegundaClasse{
    constructor(){}
}

console.log(new SegundaClasse())