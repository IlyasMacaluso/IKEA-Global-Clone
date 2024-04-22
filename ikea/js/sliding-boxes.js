const boxes = document.querySelectorAll(".box")
const heroGoShopping = document.querySelector(".hero-section .go-shopping header")
const boxesFancy = document.querySelectorAll(".box-fancy")
const carousels = document.querySelectorAll(".carousel")

/* funzione che anima tutti gli elementi all'interno di una nodeList che passiamo come parametro */
function slideAnimation(node) {
    node.forEach((element) => {
        const rectY = element.getBoundingClientRect().top
        if (rectY < window.innerHeight * 2) {
            element.classList.add("box-animation-paused")
            if (rectY < window.innerHeight * 1.4) {
                element.classList.add("box-animation-start")
            }
        }
    })
}

/* resize del riquadro go-shopping della hero section (mobile) */
function goShoppingTransition() {
    const rectY = heroGoShopping.getBoundingClientRect().top
    if (rectY < window.innerHeight * 0.8) {
        heroGoShopping.classList.add("header-transition")
    }
}

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
