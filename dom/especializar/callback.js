console.log("========== Callback ==========")

function imprimirDado(dado){
    console.log('outras tarefas')
    console.log(dado())
}

imprimirDado( function () {
    return 'Olá, Mundo!'
})

//Callback =  chame de volta 
/*
    Envia uma função como argumento para outra função
    depois de algumas tarefas, ela vai chamar esta função novamente

*/