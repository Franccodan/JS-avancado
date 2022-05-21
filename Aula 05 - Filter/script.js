const clientes = [
    {name: 'Daniel', lastname: 'Da Silva', age: 19},
    {name: 'Murilo', lastname: 'Santos', age: 12},
    {name: 'Beatriz', lastname: 'Moreira', age: 23},
]

const clientesMaiores = clientes.filter(cliente => cliente.age >= 18 )

console.log(clientesMaiores)