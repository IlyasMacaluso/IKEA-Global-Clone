const carousel1 = document.querySelectorAll(".carousel")[0]
const carousel2 = document.querySelectorAll(".carousel")[1]

const gallery1 = document.querySelectorAll(".carousel .right-items .gallery")[0]
const gallery2 = document.querySelectorAll(".carousel .right-items .gallery")[1]

// estrapoliamo la larghezza delle card
const card = carousel1.querySelector(".card")
const cardStyle = window.getComputedStyle(card)
const cardWidth = parseInt(cardStyle.getPropertyValue("width"))

// assegnamo i bottoni del primo carosello a due variabili
const btnLeft1 = carousel1.querySelector(".button-left")
const btnRight1 = carousel1.querySelector(".button-right")

const btnLeft2 = carousel2.querySelector(".button-left")
const btnRight2 = carousel2.querySelector(".button-right")

function scrollLeft(gallery, btnL, btnR) {
    gallery.scrollLeft -= cardWidth
    gallery.addEventListener("scrollend", () => {
        const isAtStart = gallery.scrollLeft === 0
        if (isAtStart) {
            // Siamo all'inizio della galleria
            console.log("Siamo all'inizio della galleria")
            btnL.classList.add("hidden")
        } else {
            btnL.classList.remove("hidden")
            btnR.classList.remove("hidden")
        }
    })
}

function scrollRight(gallery, btnL, btnR) {
    gallery.scrollLeft += cardWidth
    gallery.addEventListener("scrollend", () => {
        const isAtEnd = gallery.scrollLeft + gallery.offsetWidth >= gallery.scrollWidth - 10
        if (isAtEnd) {
            // Siamo alla fine della galleria
            console.log("Siamo alla fine della galleria")
            btnR.classList.add("hidden")
        } else {
            btnL.classList.remove("hidden")
            btnR.classList.remove("hidden")
        }
    })
}

btnLeft1.addEventListener("click", () => {
    scrollLeft(gallery1, btnLeft1, btnRight1)
})
btnRight1.addEventListener("click", () => {
    scrollRight(gallery1, btnLeft1, btnRight1)
})

btnLeft2.addEventListener("click", () => {
    scrollLeft(gallery2, btnLeft2, btnRight2)
})
btnRight2.addEventListener("click", () => {
    scrollRight(gallery2, btnLeft2, btnRight2)
})
