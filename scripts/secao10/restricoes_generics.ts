interface IHCode{
    length: number 
}

function mostraQnt<T extends IHCode>(item : T) : T {
   
    console.log(`Total: ${item.length}`)

    return item

}

mostraQnt([1,2])
console.log(mostraQnt({nome:"Ricardo", length:2}))