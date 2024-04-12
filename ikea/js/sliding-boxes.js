document.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        // const triggerBottom = ; // Trigger at 80% of the viewport
        if (box.getBoundingClientRect().top < window.innerHeight) {
            box.style.visibility = 'visible';
            box.style.animationPlayState = 'running';
        }

    });
});
