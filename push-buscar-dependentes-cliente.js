const cliente = {
    nome: "Clodoaldo",
    idade: "49",
    cpf: "062.639.318-33",
    email: "clodoaldoas@gmail.com",
    celular: ["16-99165-6426","16-99335-2003"],

    dependentes: [{
        nome: "Ana Beatriz",
        dtNasc: "28/01/2010",
        parentesco: "filha",
    }]
}
cliente.dependentes.push({
    nome:"Edna Vitória",
    dtNasc: "12/09/1996",
    parentesco: "Filha",
})

const dependenteMaisNova = cliente.dependentes.filter
(presente => presente.dtNasc==="12/09/1996")

// const dependenteMaisNova = cliente.dependentes.filter(presente => 
// presente.dtNasc==="12/09/1996")

console.log(dependenteMaisNova[0].nome)

// node push-buscar-dependentes-cliente

























// const dependenteMaisNova = cliente.dependentes.filter
(presente => presente.dtNasc==="12/09/1996")