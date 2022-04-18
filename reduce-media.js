const vendas = [120,1500,160,180,210]

// DESCOBRIR O TOTAL DOS VALORES

const totalVendas = vendas.reduce((acum,item) => acum + item ,0 )
console.log(totalVendas)



/// DESCOBRIR A MÉDIA DOS VALORES

const totalVendas1 = vendas.reduce((acum,item) => acum + item ,0 ) / vendas.length
console.log(totalVendas1)


/// DESCOBRIR O MAIOR VALOR

const maiorVenda = vendas.reduce(function(acum,item){
    return Math.max(acum,item,0)
})
console.log(maiorVenda)





