const cliente = {
    nome: "Clodoaldo",
    idade: "49",
    cpf: "062.639.318-33",
    email: "clodoaldoas@gmail.com",
    celular: ["16-99165-6426","16-99335-2003"],
}
// node acessar-varios-objetos

cliente.dependentes = {
    nome : "Ana Beatriz",
    dtNasc: "28/01/2010",
    parentesco : "filha"
}

console.log(cliente)

/// Alterar o nome do dependente

cliente.dependentes.nome = "Ana Beatriz Silva"

console.log(cliente)





