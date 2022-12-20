const axios = require('axios')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

console.log("========== Node ==========")
/*
const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

console.log("Teste")

https.get(API, res  => {
    console.log(res.statusCode)
    console.log(res.headers)
})

//Promise

console.log("========== Promise ==========")

console.log(' -- pedir uber -- ')

let aceitar = false

const promessa = new Promise((resolve, reject) => {
    if (aceitar){
        return resolve('Pedido aceito')    
    } else{
        return reject('Pedido negado')
    }
})

console.log('aguardando')

promessa.then(result => console.log(result))
        .catch(erro => console.log(erro))
        .finally(() => console.log(' -- finalizado -- '))


// Fetch

console.log("========== Fetch ==========")

fetch('https://api.github.com/users/caliansenai')
.then(resp => {
    resp.json()
    .then(data => console.log(data.login))
})
fetch('https://api.github.com/users/caliansenai')
.then(respi => respi.json())
.then(data => fetch(data.repos_url))
.then(res => res.json())
.then(d => console.log(d))
.catch(err => console.log(err))
*/
//Axios

console.log("========== Axios ==========")
/*
axios.get('https://api.github.com/users/caliansenai')
    .then(res => {
        console.log(res.data.login)
    })
*/

// Axios com promisse
/*
axios.get('https://api.github.com/users/caliansenai')
    .then(response => {
        const user = response.data
        console.log(user.repos_url + "\n---------------------")
        axios.get(user.repos_url)
        .then(resp => {
            const repositorio = resp.data
            console.log(resp.data)
        })
    })

axios.get('https://api.github.com/users/caliansenai')
    .then(response => {
        const user = response.data
        console.log(user.repos_url + "\n---------------------")
        return axios.get(user.repos_url)
    })

axios.get('https://api.github.com/users/caliansenai')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))

// Promise all

Promise.all([
    axios.get('https://api.github.com/users/caliansenai'),
    axios.get('https://api.github.com/users/caliansenai/repos')
])
.then( responses => {
    console.log(responses[0].data.login)
    console.log(responses[1].data.length)
})
*/

// Async

console.log("========== Async ==========")

/*
const promessa = new Promise( function (resolve, reject){
    return resolve('ok')
})

async function start() { // função async pq usa await
    try{
        const result = await promessa // resulta da espera pela promessa 
        console.log(result)
    } catch(e) {
        console.log(e)
    } finally {
        console.log('rodar sempre')
    }
}

start()
*/

//Async com Fetch

/*
async function start() {
    try {
        const response = await fetch('https://api.github.com/users/caliansenai')
        const user = await response.json()
        const respoReponse = await fetch(user.repos_url)
        const repos = await respoReponse.json()
        console.log(repos)
    } catch (e) {
        console.log(e)
    }
}

async function start1() {
    const url = ('https://api.github.com/users/caliansenai');
    const user = await fetch(url).then( r => r.json())
    const userRepos = await fetch(user.repos_url).then(r => r.json());
    console.log(userRepos);
}

start()
start1()
*/

// Axios Async Await

async function fetchRepos() {
    try{
        const user = await axios.get('https://api.github.com/users/caliansenai') 
        console.log(user.data)
        /*
        const repos = await axios.get(user.data.repos_url)
        console.log(repos.data)
        */
    } catch(e) {
        console.log(e)
    }
}

fetchRepos()
