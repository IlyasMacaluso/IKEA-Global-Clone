fetch('navbar.html')
    .then(response => response.text())
    .then(navbar => {
        fetch('footer.html')
            .then(response => response.text())
            .then(footer => {
                document.body.innerHTML = navbar+footer;
            })
    });