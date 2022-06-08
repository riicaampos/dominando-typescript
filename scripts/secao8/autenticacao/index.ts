namespace Autenticacao{

   interface IUsuario {
       email : string
       senha : string
   }

   interface ICadastro{
       nome : string,
       email : string
       senha : string
       dtNasc : Date
   }

   export class LoginRegistro{

       login(usuario : IUsuario){
           return usuario
       }

       registro(novoUsuario : ICadastro){
           return novoUsuario
       }

   }

   export class Recuperacao{

         recuperarSenha(){
            return "Enviando senha ao email"
         }

         recuperarUsuario(){
            return "Enviando usuario ao email"
         }

   }


}