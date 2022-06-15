export function debug(classe : unknown){
    console.log("Classe criada", classe)
}

export function log(constructor : any){
    
   return class extends constructor {
        created_at : Date = new Date("2022-06-08")
   }

}


export function decoratorAttr(target : unknown, nomePropriedade : string){

     const novoNome = `_${nomePropriedade}`

    Object.defineProperty(target, nomePropriedade,{
        get(){
          return this[novoNome].toUpperCase()
        },
        set(novoValor){
          this[novoNome] = novoValor
        }
    })

}

export function decoratorGetSet(valor : boolean){

  return function(target: unknown,
                  propertyKey: string,
                  descriptor: PropertyDescriptor){

          descriptor.enumerable  = valor        

  }
}

export function decoratorParam(target: any,
                               key: string,
                               propertyKey: number){

      Reflect.getMetadata("design:paramtypes", target, key).map((item: any) => console.log(item))                         
}