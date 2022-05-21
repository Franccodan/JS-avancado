const clientes = [
    {name: 'Daniel', lastname: 'Da Silva'},
    {name: 'Murilo', lastname: 'Santos'},
    {name: 'Beatriz', lastname: 'Moreira'},
]

let clientesFinal = []

clientes.forEach(function(cliente) {
    clientesFinal.push(cliente.name + ' ' + cliente.lastname)
})

console.log(clientesFinal)

const clientesFinalmMap = clientes.map(cliente => cliente.name + ' ' + cliente.lastname)

console.log(clientesFinalmMap)
