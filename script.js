window.onload = () => {
const SliderGalery = document.getElementById('SliderGalery')
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const butmore = document.getElementById('butmore')
const butless = document.getElementById('butless')
const moreinfo = document.getElementById('moreinfo')
let activeSlide = 0

rightBtn.addEventListener("click", () => {
    activeSlide++

    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if (activeSlide < 0) {
    activeSlide = slides.length - 1
}

    setBgToBody()
    setActiveSlide()
})

setBgToBody()

function setBgToBody() {
    SliderGalery.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}

function setDisplayButMore(butmore) {
    butmore.addEventListener("click", ()=>{
        butless.style.display="flex";
        butmore.style.display="none";
        moreinfo.style.display="block";
    })
}


function setDisplayButLess(butless) {
    butless.addEventListener("click", ()=>{
        butless.style.display="none";
        butmore.style.display="flex";
        moreinfo.style.display="none";
    })
}

setDisplayButMore(butmore)
setDisplayButLess(butless)
}