
document.addEventListener("scroll", () => {
    boxes.forEach((box) => {
        // const triggerBottom = ; // Trigger at 80% of the viewport
        if (box.getBoundingClientRect().top < window.innerHeight + 200) {
            box.style.visibility = "visible"
            box.style.animationPlayState = "running"
        }
    })
    boxesFancy.forEach((boxFancy) => {
        // const triggerBottom = ; // Trigger at 80% of the viewport
        if (boxFancy.getBoundingClientRect().top < window.innerHeight + 200 ) {
            boxFancy.style.visibility = "visible"
            boxFancy.style.animationPlayState = "running"
        } 
    })
    carousels.forEach(carousel => {
        if (carousel.getBoundingClientRect().top < window.innerHeight + 200 ) {
            carousel.style.visibility = "visible"
            carousel.style.animationPlayState = "running"
        }
    });
})