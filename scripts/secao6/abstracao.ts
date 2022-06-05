// Não pode criar instancia, apenas usar como modelo

interface MeuUsuario{
    nome : string
    email : string
    tel : string
}


abstract class Notificacao{

   abstract enviar(usuario : MeuUsuario) : boolean

}

class Email extends Notificacao{
    
    enviar(usuario: MeuUsuario): boolean {
        console.log(`Enviando email para o usuario: ${usuario.email} .....`)
        return true
    }

}

class Sms extends Notificacao{
    enviar(usuario: MeuUsuario): boolean {
        console.log(`Enviando sms para o usuario: ${usuario.tel} .....`)
        return true
    }   
}

new Email().enviar({
    nome : "Ricardo",
    email : "ricampos91@gmail.com",
    tel : "55 19 992599587"
})