const mobileNavOpenBtn = document.querySelector(".mobile-ico")
const mobileNav = document.querySelector(".mobile-nav")
const mobileNavCloseBtn = document.querySelector (".mobile-nav .close")
const overlayAll = document.querySelector(".overlay-all")

mobileNavCloseBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("visible")    
    overlayAll.classList.toggle("overlay-all-active")
})

mobileNavOpenBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("visible")
    overlayAll.classList.toggle("overlay-all-active")
})
