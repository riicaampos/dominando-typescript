class Professor {
 
    nome: string;
    idade: number;
    materia: string;

    constructor(nome: string, idade: number, materia: string){
        this.nome = nome
        this.idade = idade
        this.materia = materia
    }

    seApresentar(){
        return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos e vou ensinar ${this.materia}`
    }

    calculaNota(...notas: number[]): number{

        const result = notas.reduce((notaTotal, notaAtual) => notaTotal + notaAtual)

        return result/notas.length;

    }


}


const ricardo = new Professor('Ricardo Campos',30,'Java')

console.log(ricardo.seApresentar())

console.log(ricardo.calculaNota(3, 8, 3.4, 7))