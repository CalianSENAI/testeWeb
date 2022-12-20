//import { express } from "express";
const express = require('express')
const app = express()

let nome = "Calian"

app.listen('3000', () => {
    console.log('Rodando')
})

//tranformar tudo em json
app.use(express.json())



app.get('/',(req,res) => {
    res.send("<h1>Hello World! ${'nome'} </h1>")
})
//Utilizando put
app.route('/').put((req,res) => {
    let retorno = req.body
    retorno = "TESTE DO CALIAN"

    res.send(retorno)
})


//Utilizando Ger
app.route('/teste').get((req,res) => {
    res.send("<h1>Teste</h1>")
})

//Utilizando post ---- NÃO É A FORMA CERTA DE FAZER ALTERAR OS DADOS ASSIM, ENVIANDO OBJETO FIXO -- USAR PUT PARA ALTERAR
app.route('/').post((req,res) =>
    res.send(req = {
        "nome" : "Eduarda Rodrigues",
        "idade" : 16,
        "hobby" : "caminhar",
        //para retornar o mesmo contepudo que veio "req.body"
    })
)

