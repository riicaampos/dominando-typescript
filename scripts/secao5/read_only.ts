/**
 * Quando não se quer que altere o valor de uma propriedade, usar o readonly, não deve ser usado o const
 *  o const deve ser usado para variavel, em propriedades usar sempre o readonly
 */

interface ICurso{

    titulo: string;
    descricao?: string;
    preco: number;
    cargaHoraria: number
    classificacao: number

}

const curso: ICurso = {
    titulo: "TypeScript",
    preco: 5000,
    cargaHoraria: 10,
    classificacao: 5
}

/**
 * Aqui mesmo sendo const ele permite alterar o valor, pois está sendo alterado uma propriedade do objeto
 * e não o objeto em si, para evitar isso deve adicionar readonly nas propriedades que não se quer alterar
 * exemplo readonly titulo: string
 */
curso.titulo = 'PHP 8'
