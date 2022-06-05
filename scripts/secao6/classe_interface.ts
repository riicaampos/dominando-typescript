// Não pode criar instancia, apenas usar como modelo

interface INotificacaoV2{
    enviar(usuario : MeuUsuarioV2) : boolean

}


interface MeuUsuarioV2{
    nome : string
    email : string
    tel : string
}


abstract class NotificacaoV2 implements INotificacaoV2{

   abstract enviar(usuario : MeuUsuarioV2) : boolean

}

class EmailV2 extends NotificacaoV2{
    
    enviar(usuario: MeuUsuarioV2): boolean {
        console.log(`Enviando email para o usuario: ${usuario.email} .....`)
        return true
    }

}

class SmsV2 extends NotificacaoV2{
    enviar(usuario: MeuUsuario): boolean {
        console.log(`Enviando sms para o usuario: ${usuario.tel} .....`)
        return true
    }   
}

new EmailV2().enviar({
    nome : "Ricardo",
    email : "ricampos91@gmail.com",
    tel : "55 19 992599587"
})