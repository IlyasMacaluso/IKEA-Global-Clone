const goShpFooter = document.querySelector("footer")
const centerItems = document.querySelector(".center-items")

console.log(goShpFooter)
console.log(centerItems)

goShpFooter.addEventListener("click", () => {
    centerItems.classList.toggle("center-items-hidden")
    goShpFooter.classList.toggle("while-selector-visible")
})