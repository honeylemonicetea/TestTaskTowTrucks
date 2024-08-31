let carouselLeft = document.querySelector(".carousel-left")
let carouselRight = document.querySelector(".carousel-right")
let carousel = document.querySelector(".weight__carousel")
let indicators = [...document.querySelector(".position-indicators").children]


carouselLeft.onclick = function(){
    carousel.style.transform = "translateX(0)"
    console.log(indicators)
    indicators[0].classList.remove("indicator_blue")
    indicators[1].classList.add("indicator_blue")
}


carouselRight.onclick = function(){
    carousel.style.transform = "translateX(-50%)"
    console.log(indicators)
    indicators[0].classList.remove("indicator_blue")
    indicators[1].classList.add("indicator_blue")
}



// cost buttons
let costButton = document.querySelector(".cost__button1")
let orderButton = document.querySelector(".cost__button2")
let text1  = document.querySelector(".cost__info1")
let text2  = document.querySelector(".cost__info2")


costButton.onclick = function(){
    text1.classList.remove("cost__info_hidden")
    text2.classList.add("cost__info_hidden")
    costButton.classList.add("cost__button_selected")
    orderButton.classList.remove("cost__button_selected")
}


orderButton.onclick = function(){
    text1.classList.add("cost__info_hidden")
    text2.classList.remove("cost__info_hidden")
    costButton.classList.remove("cost__button_selected")
    orderButton.classList.add("cost__button_selected")
}