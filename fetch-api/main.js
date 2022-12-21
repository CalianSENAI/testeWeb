const url = "http://localhost:5500/api"

//Ensinar como buscar valores/dados do banco/api
function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(e => console.log(e))
}

//Ensina como retornar valores e colocar em Id's do HTML
function getUser() {
    fetch(`${url}/4`)
    .then(response => response.json())
    .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
    })
    .catch(e => console.log(e))
}

//Ensina como adicionar um usuário/registro
function addUser(newUser){
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(resp => resp.json())
    .then(data => alert.textContent = data)
    .catch(e => console.log(e))
}

//Ensina como atualizar um registro
function updateUser(updatedUser) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(e => console.log(e))
}

//Ensina como deletar Usuário
function deleteUser(id){
    fetch(`${url}/${id}`,{
        method: "DELETE",
        //body: JSON.stringify(id), // não precisa usar o body
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(e => console.log(e))
}

const newUser = {
    name: "Calian Dalari",
    avatar: "https://avatars.githubusercontent.com/u/109251660?v=4",
    city: "Jaraguá do Sul"
}

const updatedUser = {
    name: "Eduarda Rodrigues",
    avatar: "https://avatars.githubusercontent.com/u/135424?v=4",
    city: "Barra do Rio Cerro"
}

const id = 10


// ---------------- CHAMADA DAS FUNÇÕES ----------------------

//updateUser(updatedUser)
//addUser(newUser)

//deleteUser(id)
//getUser()
//getUsers()