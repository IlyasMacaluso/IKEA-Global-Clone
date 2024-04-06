const heroGSFooter = document.querySelector(".hero .go-shopping footer")
const heroGSCenterItems = document.querySelector(".hero .go-shopping .center-items")

console.log(heroGSFooter)
console.log(heroGSCenterItems)

heroGSFooter.addEventListener("click", () => {
    heroGSCenterItems.classList.toggle("center-items-hidden")
    heroGSFooter.classList.toggle("while-selector-visible")
})