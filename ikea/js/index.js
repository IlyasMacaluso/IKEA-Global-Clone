const firstbtn = document.querySelector(".switch-button-1")

firstbtn.addEventListener(`click`, () => {
    const lights = document.querySelector(".room-img-lights")
    lights.classList.toggle("lights-off")
})

const secondbtn = document.querySelector(".switch-button-2")

secondbtn.addEventListener(`click`, () => {
    const lights = document.querySelector(".room-img-lights")
    lights.classList.toggle("lights-off")
})

const thirdbtn = document.querySelector(".switch-button-3")

thirdbtn.addEventListener(`click`, () => {
    const lights = document.querySelector(".room-img-lights")
    lights.classList.toggle("lights-off")
})