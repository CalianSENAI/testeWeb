function clicar(event){
    console.log(event)
}

document.addEventListener('click', function(event){
    console.log("X:" + event.clientX + " Y:" + event.clientY)

    let div = document.createElement('div')
    div.style.position = "absolute"
    div.style.backgroundColor = "black"
    div.style.left = (event.clientX - 10) + "px"
    div.style.top = (event.clientY - 10) + "px"
    div.style.borderRadius = "50%"
    div.style.height = "20px"
    div.style.width = "20px"

    const body = document.querySelector('body')
    body.append(div)

})