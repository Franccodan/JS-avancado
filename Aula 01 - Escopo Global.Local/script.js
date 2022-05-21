/* 
ESCOPO LOCAL E GLOBAL 

O ESCOPO DETERMINA A VISIBILIDADE DE UMA VARIAVEL 

AS FUNÇÕES NO JS CRIAM O SEU PRÓPRIO ESCOPO 
AS VARIAVEIS DE UMA FUNÇÃO NÃO SÃO ACESSIVEIS FORA DELA

*/


    function teste() {
        let a = 123
    }

    teste() 

    console.log(a)