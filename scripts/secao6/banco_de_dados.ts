interface IBancoDeDados{
    ip : string,
    usuario : string,
    senha : string,
    tipoBanco : string

}

class BancoDeDados{

   static LOCAL = "127.0.0.1"
   static TIPO_MYSQL = "MySql"
   static TIPO_ORACLE = "Oracle"

   constructor(
       private ip : string,
       private usuario : string,
       private senha : string,
       private tipoBanco : string
   ){ }

   static factory(parametros : IBancoDeDados){

    //ele valida se oq foi passado esta dentro do array
    if(![BancoDeDados.TIPO_MYSQL, BancoDeDados.TIPO_ORACLE].includes(parametros.tipoBanco)){
          throw new Error("Tipo inválido")
    }
       
    return new BancoDeDados(
           parametros.ip,
           parametros.usuario,
           parametros.senha,
           parametros.tipoBanco
       )
   }

}


const banco = BancoDeDados.factory({
    tipoBanco : BancoDeDados.TIPO_ORACLE,
    senha : "root",
    usuario : "admin",
    ip : BancoDeDados.LOCAL
})

console.log(banco)