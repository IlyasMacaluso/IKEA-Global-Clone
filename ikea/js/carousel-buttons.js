const carosello = document.querySelector(".carousel")
const gallery = document.querySelector(".carousel .right-items .gallery")

const card = carosello.querySelector(".card")
const cardStyle = window.getComputedStyle(card)
const cardWidth = parseInt(cardStyle.getPropertyValue("width"))

const btnLeft = carosello.querySelector(".button-left")
const btnRight = carosello.querySelector(".button-right")

btnLeft.addEventListener("click", () => {
    gallery.scrollLeft -= cardWidth
    gallery.addEventListener("scrollend", () => {
        const isAtStart = gallery.scrollLeft === 0
        if (isAtStart) {
            // Siamo all'inizio della galleria
            console.log("Siamo all'inizio della galleria")
            btnLeft.classList.add("hidden")
        } else {
            btnLeft.classList.remove("hidden")
            btnRight.classList.remove("hidden")
        }
    })
})

btnRight.addEventListener("click", () => {
    gallery.scrollLeft += cardWidth
    gallery.addEventListener("scrollend", () => {
        const isAtEnd = gallery.scrollLeft + gallery.offsetWidth >= gallery.scrollWidth - 10
        if (isAtEnd) {
            // Siamo alla fine della galleria
            console.log("Siamo alla fine della galleria")
            btnRight.classList.add("hidden")
        } else {
            btnLeft.classList.remove("hidden")
            btnRight.classList.remove("hidden")
        }
    })
})
