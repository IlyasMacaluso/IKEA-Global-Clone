const boxes = document.querySelectorAll(".box")
const heroGoShopping = document.querySelector(".hero-section .go-shopping header")
const boxesFancy = document.querySelectorAll(".box-fancy")
const carousels = document.querySelectorAll(".carousel")

/* funzione che anima tutti gli elementi all'interno di una nodeList che passiamo come parametro */
function slideAnimation(node) {
    node.forEach((element) => {
        const rectY = element.getBoundingClientRect().top
        if (rectY < window.innerHeight * 1.5) {
            element.style.visibility = "visible"
            element.style.animationPlayState = "running"
        } else {
            element.style.visibility = "hidden"
            element.style.animationPlayState = "paused"
        }
    })
}

/* resize del riquadro go-shopping della hero section (mobile) */
function goShoppingTransition() {
    const rectY = heroGoShopping.getBoundingClientRect().top
    if (rectY < window.innerHeight * .8) {
        heroGoShopping.classList.add("header-transition")
    }
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
    goShoppingTransition()
})

window.addEventListener("resize", () => {
    slideAnimation(boxes)
    slideAnimation(boxesFancy)
    slideAnimation(carousels)
})