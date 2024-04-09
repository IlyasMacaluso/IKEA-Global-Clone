const goShpButton = document.querySelector(".navbar .go-shopping")
const bottomItems = document.querySelector(".navbar .go-shopping .bottom-items")
const rightItem = document.querySelector(".navbar .go-shopping .right-items")
const showMore = document.querySelector(".navbar .go-shopping .left-items span")

goShpButton.addEventListener("click", () => {
    bottomItems.classList.toggle("bottom-items-hidden")
    rightItem.classList.toggle("no-border")
    showMore.classList.toggle("spin")
})
function moveIcon () {
    showMore.classList.toggle("move")
}
goShpButton.addEventListener("mouseover", moveIcon)
goShpButton.addEventListener("mouseout", moveIcon)