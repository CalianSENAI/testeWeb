const button = document.getElementById('openModal')
const invisible = document.querySelector('.invisible')
    /*invisible.removeAttribute('style')*/
    /*invisible.style.removeProperty('display')*/

button.onclick = function(){
    console.log("Abrir Janela")
    invisible.style.display = ""
    button.style.display = "none"
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'

    if (isEscKey) {
    console.log("ESC sair Janela")
    invisible.style.display = "none"
    button.style.display = ""
    }
})