function obterPrimeiraPos<T>(meuArray : Array<T>) : T{
       return meuArray[0]
}

console.log(obterPrimeiraPos(["Ricardo","Suelen","Nicolas"]))
console.log(obterPrimeiraPos([1,2,3,4]))
console.log(obterPrimeiraPos([{nome : "Ricardo", idade : 30}, {nome : "Suelen", idade : 32}]))
console.log(obterPrimeiraPos([{nome : "Ricardo", idade : 30},"Ricardo",123]))