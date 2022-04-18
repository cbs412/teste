const cliente = {
    nome: "Clodoaldo",
    idade: "49",
    cpf: "062.639.318-33",
    email: "clodoaldoas@gmail.com",
    celular: ["16-99165-6426","16-99335-2003"],
}

dadosCliente = ["nome","idade","cpf","email"]

console.log(cliente)

// busca apenas o nome da array dadosCliente.
console.log(cliente[dadosCliente[0]])

// busca apenas o nome da array dadosCliente e informa apenas os 3 primeiros dig o cpf
a = cliente.cpf.substring(0,3)
console.log(a)


// fazer a buscar em toda a array e dar o print em todos os dados
dadosCliente.forEach(element => console.log(cliente[element]))

// para adicionar uma propriedade(campo) em um objeto

cliente.telefone = "16-99165-6426"

console.log(cliente)

// para mostrar os dois número de telefone

cliente.celular.forEach(telefone => console.log(telefone))


















