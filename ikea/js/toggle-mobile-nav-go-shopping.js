const navGSFooter = document.querySelector(".mobile-nav .go-shopping footer")
const navGSCenterItems = document.querySelector(".mobile-nav .go-shopping .center-items")

console.log(navGSFooter)
console.log(navGSCenterItems)

navGSFooter.addEventListener("click", () => {
    navGSCenterItems.classList.toggle("center-items-hidden")
    navGSFooter.classList.toggle("while-selector-visible")
})