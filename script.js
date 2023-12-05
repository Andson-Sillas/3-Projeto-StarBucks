const image = document.querySelector(".starbucks")
const circle = document.querySelector(".circle")
const botao = document.querySelector(".botao")
const colors = ["#017143", "#eb7495", "#d752b1"];


function trocaImagem(address){
    image.src = address
}

function trocaCor(colour){
    circle.style.background = colour
}


botao.addEventListener("click",function(){
    const randomNumber = Math.floor(Math.random() * colors.length);
    circle.style.backgroundColor = colors[randomNumber]
})
