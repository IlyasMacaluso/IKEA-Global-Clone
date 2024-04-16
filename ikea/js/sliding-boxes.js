const boxes = document.querySelectorAll(".box")
const boxesHero = document.querySelectorAll(".box-hero")
const boxesFancy = document.querySelectorAll(".box-fancy")
const carousels = document.querySelectorAll(".carousel")

/* funzione che anima tutti gli elementi all'interno di una nodeList che passiamo come parametro */
function slideAnimation(node) {
    node.forEach((element) => {
        const rectY = element.getBoundingClientRect().top
        if (rectY < window.innerHeight * 1.2) {
            element.style.visibility = "visible"
            element.style.animationPlayState = "running"
        } else {
            element.style.visibility = "hidden"
            element.style.animationPlayState = "paused"
        }
    })
}

//animazione al caricamento della pagina
window.addEventListener("load", () => {
    slideAnimation(boxes)
    slideAnimation(boxesFancy)
    slideAnimation(carousels)
})

//animazioni allo scroll
document.addEventListener("scroll", () => {
    slideAnimation(boxes)
    slideAnimation(boxesFancy)
    slideAnimation(carousels)
})

