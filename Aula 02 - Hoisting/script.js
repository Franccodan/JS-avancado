/* 

HOISTING (IÇAR, ERGUER)

HOISTING É O COMPORTAMENTO PADRÃO DO JAVASCRIPT DE MOVERAS DECLARAÇÕES PARA O TOPO
DE UM ESCOPO

*/

function teste() {
    outraFuncao()
    function outraFuncao() {
        console.log('sou a outra função')
    }

    
}

teste()



