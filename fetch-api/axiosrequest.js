const url = "http://localhost:5500/api"

// GET
function getUsers(){
    axios.get(url)
    .then(resp => {
        renderApiResult.textContent = JSON.stringify(resp.data)
    })
    .catch(e => console.error(e))
}
function getUser(){
    axios.get(`${url}/1`)
    .then(resp => {
        userName.textContent = resp.data.name
        userCity.textContent = resp.data.city
        userName.style.color = "blue"
        userAvatar.src = resp.data.avatar
        userAvatar.style.border = "2px solid black"
    })
    /* - OUTRA FORMA DE FAZER
    .then(response => {
        const data = responde.data
        alertApi.textContent = data.name
    })

    */
    .catch(e => console.error(e))
}

function getOnlyUser(id){
    axios.get(`${url}/${id}`)
    .then(resp => {
        let resultado = JSON.stringify(resp.data)
        if (resultado = "User nor found!"){
            return false
        }
    })
    .catch(e => console.error(e))
}

getUsers()
getUser()

//POST
function addUser(user){
    axios.post(url, user)
    .then(resp => alertApi.textContent = resp.data)
    //document.location.reload()
    /* - OUTRA FORMA DE FAZER
    .then(response => {
        const data = responde.data
        alertApi.textContent = data.name
    })

    */
}

let user = {
    name: "Munir Dalari",
    avatar: "https://avatars.githubusercontent.com/u/109251660?v=4",
    city: "Barra do Rio Cerro"
}

//addUser(user)

//PUT
function updateUser(userUpdated,id){
    axios.put(`${url}/${id}`, userUpdated)
    .then(resp => {
        alertApi.textContent = resp.data
        //alert(resp.data)
    })
    .catch(e => console.error(e))
}

let userUpdated = {
    name: "Fabiano Rodrigues",
    avatar: "https://avatars.githubusercontent.com/u/2686?v=4",
    city: "Barra do Rio Cerro"
}

let id = 14

//updateUser(userUpdated,id)

//DELETE
function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(resp => alertApi.textContent = resp.data)
    .catch(e => console.error(e))
}

/*
function deleteAll(){
    for(let idDelete = 28 ; idDelete <= 144 ; idDelete++){
        deleteUser(idDelete)
    }
}
deleteAll()
*/
/*
function deleteAll(){
    let pasDelete = 28
    while(getOnlyUser(pasDelete)){
        pasDelete++
        deleteUser(pasDelete)
        console.log(pasDelete)
    }
}

deleteAll()
*/



