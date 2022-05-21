const clientes = [
    {name: 'Daniel', score: 550},
    {name: 'Rafael', score: 72},
    {name: 'Murilo', score: 800},
    {name: 'Sophia', score: 136},
    {name: 'Laura', score: 98},
    {name: 'Ana Julia', score: 64},
]

//acc = accumulator
//curr = current
const clientesFinal = clientes.reduce((acc, curr) => {
    if (curr.score > 100){
        acc.pass.push(curr)
    }
    else {
        acc.fail.push(curr)
    }

return acc    

}, {
    pass: [],
    fail: []
})

console.log(clientesFinal)


const numeros = [1, 2, 3, 4]

//''

const numerosFinal = numeros.reduce((acc, curr) =>{
    acc += `${curr + 1 + ' ' + '-'}`

    return acc
}, '')

console.log(numerosFinal)