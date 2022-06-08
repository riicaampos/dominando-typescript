interface IProcessamento <T>{

   valor : T

   realizaProcessamento(dado : T) : T

}

const cstring : IProcessamento<string> = {
    valor : "HCode",
    realizaProcessamento(dado : string) : string {
        return dado.toUpperCase()
    }
}

console.log(cstring.valor)
console.log(cstring.realizaProcessamento("Teste"))