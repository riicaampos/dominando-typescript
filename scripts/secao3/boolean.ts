let admin: boolean = true;

//Em TS tudo que for diferente de 0 ele traduz para true, uma string vazia tambem pode ser um false
//Se for precisa conveter  para boolean, null e undefined tambem retornam falso

//Deve ser chamado como uma função, sem o new
admin = Boolean('1')

console.log(admin)

let senha: string = "12345678"
let senhaSegura: boolean = false;

//Uma expressão tambem pode ser traduziada pra boolean
senhaSegura = senha.length >= 8

console.log(senhaSegura)