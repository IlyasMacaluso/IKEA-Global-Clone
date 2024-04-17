const heroGSFooter = document.querySelector(".hero-section .go-shopping footer")
const heroGSCenterItems = document.querySelector(".hero-section .go-shopping .center-items")

heroGSFooter.addEventListener("click", () => {
    heroGSCenterItems.classList.toggle("center-items-hidden")
    heroGSFooter.classList.toggle("while-selector-visible")
})