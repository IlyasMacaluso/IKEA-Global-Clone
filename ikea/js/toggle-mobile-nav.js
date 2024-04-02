const mobileNavOpenBtn = document.querySelector(".mobile-ico")
const mobileNav = document.querySelector(".mobile-nav")
const mobileNavCloseBtn = document.querySelector (".mobile-nav .close")

mobileNavCloseBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("visible")    
})

mobileNavOpenBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("visible")
})
