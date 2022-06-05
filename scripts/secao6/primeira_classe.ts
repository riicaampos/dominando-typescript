class Pessoa {

   nome: string;
   idade: number
   altura: number;


   constructor(nome: string, idade: number, altura: number){
     
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;

   }

   toString(): string{
       return `Meu nome é ${this.nome}, tenho ${this.idade} e tenho ${this.altura} de altura`
   }

}

let ronaldo = new Pessoa('Ronaldo',24,1.93);
let marcus = new Pessoa('Marcus',30,1.70);


console.log(JSON.stringify(ronaldo))
console.log(JSON.stringify(marcus))
console.log(ronaldo.toString())