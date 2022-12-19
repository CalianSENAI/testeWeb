<<<<<<< HEAD
//getElemenntById()
const element = document.getElementById("blog-title")
console.log(element)

//getElementByClassName()
const element1 = document.getElementsByClassName('one')
console.log(element1)

//getElementsByTagName()
const element2 = document.getElementsByTagName('meta')
console.log(element2)

//querySelector()
const element3 = document.querySelector('#blog-title')
console.log(element3)

const element4 = document.querySelector('.one')
console.log(element4)

//querySelectorAll()
const element5 = document.querySelectorAll('h1')
console.log(element5)

// Manipulando Conteúdo
// textContent

const element6 = document.querySelector('h1')
element6.textContent = "Calian"

//innerText
const element7 = document.querySelector('h1')
element.innerText = "Olá Teste"

//innerHTML - troca só o conteúdo do html

const element8 = document.querySelector('h1')
element8.innerHTML = "Inner <small>Inner</small>"

//value
const element9 = document.getElementById('nome')

element9.value = "Calian"

// Atributos

const header = document.querySelector('.one')
header.setAttribute('id','one1')

const headerID = document.querySelector('#one1')
console.log(headerID)

// Remover Atributo
header.removeAttribute('class')

// Alterando Estilo

element.style.color = "red"

// classList
element4.classList.add('active')
element4.classList.remove('active')
// .toggle - se existir ele tira, se não existir ele coloca


// Navegando pelos elementos
const element11 = document.querySelector('h1')

console.log(element11.parentElement)
console.log(element11.parentNode) // todos os pais

// Navegando pelos filhos
const element12 = document.querySelector('body')
/*console.log(element12.childNodes)*/
/*console.log(element12.lastElementChild)*/

// Vegando pelos irmãos
const element13 = document.querySelector('input')
// nextSibling nextElementSibling
console.log(element13.nextElementSibling)

// Criando e adicionando elementos na página

const div = document.createElement('div')
div.innerText = "Teste Append"

const body = document.querySelector('body')
body.append(div) // por ultimo
body.prepend(div) // adiciona antes de qualquer elemento

// Insert before
const inputTeste = document.getElementById('teste')

body.insertBefore(div,inputTeste.nextElementSibling) // primeiro parâmetro oq vai inserir e segundo antes do que vai inserir 

// EVENTOS

function print(){
    console.log("Printou")
}

function testeBt(teste){
    const valor = document.getElementById('teste')
    console.log(teste.value)
    let labelColor = ""

    if (teste.value == "Calian"){
        labelColor = document.querySelector('#labelMudar')
        labelColor.style.color = "aqua"
    } else {
        labelColor = document.querySelector('#labelMudar')
        labelColor.style.color = "red"
    }
}

/*
const inputKey = document.getElementById('inputKey')

inputKey.onclick = function(event) {
    console.log(event)
}
*/

const inputKey = document.querySelector('input')
inputKey.onclick = function(event) {
    console.log(event.clientX +" - "+event.clientY)
=======
//getElemenntById()
const element = document.getElementById("blog-title")
console.log(element)

//getElementByClassName()
const element1 = document.getElementsByClassName('one')
console.log(element1)

//getElementsByTagName()
const element2 = document.getElementsByTagName('meta')
console.log(element2)

//querySelector()
const element3 = document.querySelector('#blog-title')
console.log(element3)

const element4 = document.querySelector('.one')
console.log(element4)

//querySelectorAll()
const element5 = document.querySelectorAll('h1')
console.log(element5)

// Manipulando Conteúdo
// textContent

const element6 = document.querySelector('h1')
element6.textContent = "Calian"

//innerText
const element7 = document.querySelector('h1')
element.innerText = "Olá Teste"

//innerHTML - troca só o conteúdo do html

const element8 = document.querySelector('h1')
element8.innerHTML = "Inner <small>Inner</small>"

//value
const element9 = document.getElementById('nome')

element9.value = "Calian"

// Atributos

const header = document.querySelector('.one')
header.setAttribute('id','one1')

const headerID = document.querySelector('#one1')
console.log(headerID)

// Remover Atributo
header.removeAttribute('class')

// Alterando Estilo

element.style.color = "red"

// classList
element4.classList.add('active')
element4.classList.remove('active')
// .toggle - se existir ele tira, se não existir ele coloca


// Navegando pelos elementos
const element11 = document.querySelector('h1')

console.log(element11.parentElement)
console.log(element11.parentNode) // todos os pais

// Navegando pelos filhos
const element12 = document.querySelector('body')
/*console.log(element12.childNodes)*/
/*console.log(element12.lastElementChild)*/

// Vegando pelos irmãos
const element13 = document.querySelector('input')
// nextSibling nextElementSibling
console.log(element13.nextElementSibling)

// Criando e adicionando elementos na página

const div = document.createElement('div')
div.innerText = "Teste Append"

const body = document.querySelector('body')
body.append(div) // por ultimo
body.prepend(div) // adiciona antes de qualquer elemento

// Insert before
const inputTeste = document.getElementById('teste')

body.insertBefore(div,inputTeste.nextElementSibling) // primeiro parâmetro oq vai inserir e segundo antes do que vai inserir 

// EVENTOS

function print(){
    console.log("Printou")
}

function testeBt(teste){
    const valor = document.getElementById('teste')
    console.log(teste.value)
    let labelColor = ""

    if (teste.value == "Calian"){
        labelColor = document.querySelector('#labelMudar')
        labelColor.style.color = "aqua"
    } else {
        labelColor = document.querySelector('#labelMudar')
        labelColor.style.color = "red"
    }
>>>>>>> e1fd80206a7873b34596c192bc886df0cb6de3d7
}