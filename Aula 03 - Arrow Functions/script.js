/* 

ARROW FUNCTIONS

AS FUNÇÕES DE SETA NOS PERMITEM ESCREVER UMA SINTAXE DE FUNÇÃO MAIS CURTA

*/

const soma = (param1, param2) => param1 + param2 

const resultado = soma(11, 2)

console.log(resultado)

const teste = param1 => param1


console.log(teste('ok'))



const botao = document.querySelector('#botao')

botao.onclick = () => {
    console.log(this)
    
}