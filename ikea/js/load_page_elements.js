const deskNavTag = document.querySelector(".navbar")
const mobNavTag = document.querySelector(".mobile-nav")
const footTag = document.querySelector(".body-footer")
const headTag = document.querySelector("head")
const bodyTag = document.querySelector("body")

bodyTag.setAttribute("style", "display: none")

async function loadElements() {
    try {
        const res1 = await fetch("head.html")
        const res2 = await fetch("desktop-nav.html")
        const res3 = await fetch("mobile-nav.html")
        const res4 = await fetch("footer.html")

        const headData = await res1.text()
        const deskNavData = await res2.text()
        const mobNavData = await res3.text()
        const footData = await res4.text()

        deskNavTag.innerHTML = deskNavData
        mobNavTag.innerHTML = mobNavData
        footTag.innerHTML = footData
        headTag.innerHTML += headData

        // Carica gli script dopo che tutti gli altri elementi sono stati inseriti nel DOM
        await loadScripts()
    } catch (error) {
        console.log(error.message)
    }
}

// Funzione per caricare gli script
function loadScripts() {
    return Promise.all([
        fetchScript("js/navbar-animations-jobs.js"),
        fetchScript("js/navbar-animations.js"),
        fetchScript("js/toggle-mobile-nav.js"),
        fetchScript("js/toggle-mobile-nav-go-shopping.js"),
        fetchScript("js/footer.js"),
        fetchScript("js/toggle-hero-go-shopping"),
        fetchScript("js/carousel-buttons.js"),
        fetchScript("js/clock.js"),
        fetchScript("js/sliding-boxes.js"),
    ])
}

// Funzione per caricare uno script
function fetchScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script")
        script.src = url
        script.onload = resolve
        script.onerror = reject
        document.body.appendChild(script) // Aggiungi lo script al body
    })
}

window.addEventListener("load", () => {
    loadElements()
    // per caricare la pagina dopo che i cambiamenti sono stati applicati
    setTimeout(() => {
        bodyTag.setAttribute("style", "opacity: 1")
    }, 100)
})
